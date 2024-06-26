'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { Problem, InAndOut, Result } from '../stores/problem-types'
import { problemsStore } from '../stores/problems'
import { createSupabaseBrowerClient } from '../../../supabase/supabaseClient'
import { TSBProblem } from '../../../supabase/squash-types'
import { getUserClient } from '../../../supabase/requests/user'
interface ProblemContextProviderProps {
  params: {
    id: string
  }
  children?: React.ReactNode
}
type ProblemCtx = {
  problem: TSBProblem | null
  problemLocal: Problem | null
  codeValue: string
  handleChangeCodeValue: (value?: string) => void
  getProblemLocally: (name: string) => Problem | null
  results: Result[]
  resultsSubmission: Result[]
  handleProcessSolution: (
    solution: string,
    handleFunc: (cb: (...arg0: InAndOut[]) => InAndOut) => Result[],
    funcName: string
  ) => void
  handleProcessSubmission: (
    solution: string,
    handleFunc: (cb: (...arg0: InAndOut[]) => InAndOut) => Result[],
    funcName: string
  ) => Result[]
  handleChangeTracker: () => void
}
const ProblemCtx = createContext<ProblemCtx | null>(null)

export const ProblemContextProvider: React.FC<ProblemContextProviderProps> = ({
  params,
  children
}) => {
  const [problem, setProblem] = useState<TSBProblem | null>(null)
  const [problemLocal, setProblemLocal] = useState<Problem | null>(null)
  const [codeValue, setCodeValue] = useState('')
  const [results, setResults] = useState<Result[]>([])
  const [resultsSubmission, setResultsSubmission] = useState<Result[]>([])
  const [tracker, setTracker] = useState(false)

  useEffect(() => {
    const getProblemBrowser = async () => {
      const supabase = createSupabaseBrowerClient()
      const { data } = await getUserClient()
      const { data: problem, error } = await supabase
        .from('problems')
        .select('*,problem_overview ( * )')
        .eq('name', params.id)
        .eq('problem_overview.user_id', data?.id || '')
        .maybeSingle()
      if (problem) {
        setProblem(problem)
        setCodeValue(problem?.template_code || '')
        const problemLocal = getProblemLocally(problem.name || '')
        if (problemLocal) {
          setProblemLocal(problemLocal)
        }
      }
    }
    getProblemBrowser()
  }, [params.id, tracker])
  const handleChangeTracker = () => setTracker(pre => !pre)

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
    const cb = new Function(`
      ${solution}
      return ${funcName}
    `)()
    const rs = handleFunc(cb as (...arg0: InAndOut[]) => InAndOut)
    setResults(rs)
    return rs
  }

  const handleProcessSubmission = (
    solution: string,
    handleFunc: (cb: (...arg0: InAndOut[]) => InAndOut) => Result[],
    funcName: string
  ) => {
    const cb = new Function(`
    ${solution}
    return ${funcName}
  `)()
    const rs = handleFunc(cb as (...arg0: InAndOut[]) => InAndOut)
    setResultsSubmission(rs)
    return rs
  }

  return (
    <ProblemCtx.Provider
      value={{
        problem,
        problemLocal,
        codeValue,
        handleChangeCodeValue,
        getProblemLocally,
        results,
        resultsSubmission,
        handleProcessSolution,
        handleProcessSubmission,
        handleChangeTracker
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
