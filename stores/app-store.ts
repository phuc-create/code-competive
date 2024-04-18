import { createStore } from 'zustand/vanilla'

interface BoardCards {
  id: number
  _unique: string | undefined
}

export type GameActions = {
  setBoardCards: (boardCards: BoardCards[]) => void
  setLevel: (level: number) => void
  updateMove: () => void
  updateMiss: () => void
  reset: () => void
}

export type GameState = {
  loading: boolean
  level: number
  move: number
  miss: number
  boardCards: BoardCards[]
}

export type GameStore = GameState & GameActions

const defaultInitState: GameState = {
  loading: true,
  level: 0,
  move: 0,
  miss: 0,
  boardCards: []
}

export const createGameStore = (initState: GameState = defaultInitState) => {
  return createStore<GameStore>()(set => ({
    ...initState,
    setLevel: (level: number) => set(state => ({ ...state, level: level })),
    setBoardCards: (boardCards: BoardCards[]) =>
      set(state => ({ ...state, boardCards, loading: false })),
    updateMove: () => set(state => ({ ...state, move: state.move + 1 })),
    updateMiss: () => set(state => ({ ...state, miss: state.miss + 1 })),
    reset: () => set(state => ({ ...state, move: 0, miss: 0, loading: false }))
  }))
}
