import React from 'react'

export type InAndOut =
  | string
  | number
  | Array<number>
  | Array<string>
  | boolean
  | null
  | undefined

export type Example = {
  id: string
  var_name: string[]
  input: InAndOut[]
  output: InAndOut
  explaination?: string
}

export type Constraints = {
  id: string
  cons: React.ReactNode
}
export type Problem = {
  id: string // unique ID of problems
  number: number // problem number
  title: string // name of problems
  description: string[] | string | React.ReactNode // description of problems
  examples: Example[] // aslo known as test cases
  constraints: Constraints[] // also known as limitation of function
  templateCode: string // template to write code
  handleFunction: ((...params: InAndOut[]) => InAndOut) | string // user solution
  starterFunctionName: string // function required name
  numberOfSolutions?: number
  numberOfUserCompleted?: number
  level: 'easy' | 'medium' | 'hard'
}
