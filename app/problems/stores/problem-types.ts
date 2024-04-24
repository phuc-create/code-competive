import React from 'react'

export type InAndOut =
  | string
  | number
  | Array<number>
  | Array<string>
  | boolean
  | null
  | undefined
  | { [key: string]: InAndOut }

export type TestCases = {
  id: string
  input: { [key: string]: InAndOut }
  output: InAndOut
  explaination?: string
}

export type Constraints = {
  id: string
  cons: React.ReactNode
}

export type Result = {
  case: number | string
  input: { [key: string]: InAndOut }
  output: InAndOut
  expected: InAndOut
  success: boolean
}
export type Problem = {
  id: string // unique ID of problems
  number: number // problem number
  title: string // name of problems
  description: string[] | string | React.ReactNode // description of problems
  testcases: TestCases[] // aslo known as test cases
  constraints: Constraints[] // also known as limitation of function
  templateCode: string // template to write code
  handleFunction: (cb: (...arg0: InAndOut[]) => InAndOut) => Result[] // user solution
  starterFunctionName: string // function required name
  numberOfSolutions?: number
  numberOfUserCompleted?: number
  level: 'easy' | 'medium' | 'hard'
}
