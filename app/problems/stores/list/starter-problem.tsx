import { TestCases, InAndOut, Problem, Result } from '../problem-types'

const problemTestcases: TestCases[] = [
  {
    id: 'ex-1',
    input: { s: 'hello' },
    output: false
  },
  {
    id: 'ex-2',
    input: { s: '8jhdsh983' },
    output: true
  },
  {
    id: 'ex-3',
    input: { s: '0' },
    output: true
  },
  {
    id: 'ex-4',
    input: { s: 'nineotwo9@$%@#$@12' },
    output: true
  }
]

const handleTestSolution = (
  cb: (...arg0: InAndOut[]) => InAndOut
): Result[] => {
  const results: Result[] = []
  for (const c of problemTestcases) {
    const result = cb(...Object.values(c.input))
    results.push({
      case: c.id,
      input: c.input,
      output: result,
      expected: c.output,
      success: result === c.output
    })
  }
  return results
}

const handleSubmitSolution = (
  cb: (...arg0: InAndOut[]) => InAndOut
): Result[] => {
  const results: Result[] = []
  for (const c of problemSubmitCases) {
    const result = cb(...Object.values(c.input))
    results.push({
      case: c.id,
      input: c.input,
      output: result,
      expected: c.output,
      success: result === c.output
    })
  }
  return results
}
const problemTemplate = `/**
* s: string
* output: boolean
*/
const containNumber = (s) => {
 // write your code here
}`
export const starter_problem: Problem = {
  id: 'starter-problem',
  testcases: problemTestcases,
  handleFunction: handleTestSolution,
  handleSubmitSolution: handleSubmitSolution
}

const problemSubmitCases: TestCases[] = [
  {
    id: 'ex-1',
    input: { s: 'hello' },
    output: false
  },
  {
    id: 'ex-2',
    input: { s: '8jhdsh983' },
    output: true
  },
  {
    id: 'ex-3',
    input: { s: '0' },
    output: true
  },
  {
    id: 'ex-4',
    input: { s: 'nineotwo9@$%@#$@12' },
    output: true
  }
]
