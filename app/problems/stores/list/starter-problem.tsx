import {
  Constraints,
  TestCases,
  InAndOut,
  Problem,
  Result
} from '../problem-types'

const problemDescription = (
  <>
    <p>
      Given a string and check whether the string containst any number or not
    </p>
  </>
)

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

const problemConstraints: Constraints[] = [
  {
    id: 'cons-1',
    cons: <code>1 &lt;= s.length &lt;= 1000</code>
  },
  {
    id: 'cons-2',
    cons: (
      <>
        <code>s</code> consists of English letters (lower-case and
        upper-case),number and special characters
        <code>','</code> and <code>'.'</code>
      </>
    )
  }
]
const problemTemplate = `/**
* s: string
* output: boolean
*/
const containNumber = (s) => {
 // write your code here
}`
export const starter_problem: Problem = {
  id: 'starter-problem',
  number: 2,
  title: 'Let`s solve this!',
  description: problemDescription,
  testcases: problemTestcases,
  constraints: problemConstraints,
  templateCode: problemTemplate,
  handleFunction: handleTestSolution,
  starterFunctionName: 'containNumber',
  level: 'easy'
}
