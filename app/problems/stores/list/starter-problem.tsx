import { Constraints, Example, InAndOut, Problem } from '../problem-types'
const problemDescription = (
  <>
    <p>
      Given a string and check whether the string containst any number or not
    </p>
  </>
)

const problemExamples: Example[] = [
  {
    id: 'ex-1',
    var_name: ['s'],
    input: ['hello'],
    output: false
  },
  {
    id: 'ex-2',
    var_name: ['s'],
    input: ['8jhdsh983'],
    output: true
  },
  {
    id: 'ex-3',
    var_name: ['s'],
    input: ['0'],
    output: true
  },
  {
    id: 'ex-4',
    var_name: ['s'],
    input: ['nineotwo9@$%@#$@12'],
    output: true
  }
]

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
const problemTemplate = `const containNumber = (s: string) => {
  // write your code here
}`
export const starter_problem: Problem = {
  id: 'starter-problem',
  number: 2,
  title: 'Let`s solve this!',
  description: problemDescription,
  examples: problemExamples,
  constraints: problemConstraints,
  templateCode: problemTemplate,
  handleFunction: '',
  starterFunctionName: 'containNumber',
  level: 'easy'
}
