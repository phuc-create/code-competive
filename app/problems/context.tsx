'use client'
import React, { createContext, useContext, useState } from 'react'
import { problemsStore } from './stores/problems'
import { InAndOut, Problem, Result } from './stores/problem-types'
interface ProblemContextProviderProps {
  children?: React.ReactNode
}
type ProblemCtx = {
  codeValue: string
  handleChangeCodeValue: (value?: string) => void
  getProblemLocally: (name: string) => Problem | null
  results: Result[]
  handleProcessSolution: (
    solution: string,
    handleFunc: (cb: (...arg0: InAndOut[]) => InAndOut) => Result[],
    funcName: string
  ) => void
}
const ProblemCtx = createContext<ProblemCtx | null>(null)

export const ProblemContextProvider: React.FC<ProblemContextProviderProps> = ({
  children
}) => {
  const [codeValue, setCodeValue] = useState('')
  const [results, setResults] = useState<Result[]>([])
  if (!ProblemCtx) {
    throw Error('Must be within the context')
  }
  const handleChangeCodeValue = (value?: string) => {
    setCodeValue(() => value || '')
  }
  const getProblemLocally = (name: string) => {
    const found = problemsStore[name]
    if (found) {
      return found
    }
    return null
  }
  const handleProcessSolution = (
    solution: string,
    handleFunc: (cb: (...arg0: InAndOut[]) => InAndOut) => Result[],
    funcName: string
  ) => {
    const cb = eval(`(function () {
      ${solution}
      return ${funcName}
    })()`)
    const rs = handleFunc(cb as (...arg0: InAndOut[]) => InAndOut)
    setResults(rs)
  }

  return (
    <ProblemCtx.Provider
      value={{
        codeValue,
        handleChangeCodeValue,
        getProblemLocally,
        results,
        handleProcessSolution
      }}
    >
      {children}
    </ProblemCtx.Provider>
  )
}

export const useProblem = () => {
  const store = useContext(ProblemCtx)
  if (!store) {
    throw Error('Must be within the ProblemCtx')
  }
  return store
}
