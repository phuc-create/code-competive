import { Constraints, Example, InAndOut, Problem } from '../problem-types'
const problemDescription = (
  <>
    <p>
      The string <code>"PAYPALISHIRING"</code> is written in a zigzag pattern on
      a given number of rows like this: (you may want to display this pattern in
      a fixed font for better legibility)
    </p>
    {/* eslint-disable-next-line prettier/prettier */}
      <pre>
      P   A   H   N
      A P L S I I G 
      Y   I   R
      </pre>
    <p>
      And then read line by line: <code>"PAHNAPLSIIGYIR"</code>
    </p>
    <p>
      Write the code that will take a string and make this conversion given a
      number of rows:
    </p>
    <pre>string convert(string s, int numRows);</pre>
  </>
)

const problemExamples: Example[] = [
  {
    id: 'ex-1',
    input: ['PAYPALISHIRING', 3],
    output: 'PAHNAPLSIIGYIR'
  },
  {
    id: 'ex-2',
    input: ['PAYPALISHIRING', 4],
    output: 'PINALSIGYAHRPI'
  },
  {
    id: 'ex-3',
    input: ['A', 1],
    output: 'A'
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
        <code>s</code> consists of English letters (lower-case and upper-case),{' '}
        <code>','</code> and <code>'.'</code>
      </>
    )
  },
  {
    id: 'cons-3',
    cons: <code>1 &lt;= numRows &lt;= 1000</code>
  }
]
const problemTemplate = `const convert = () => {
  // write your code here
}`
export const zig_zag_conversion_problem: Problem = {
  id: 'zig-zag-conversion',
  number: 1,
  title: 'Zig Zag Conversion',
  description: problemDescription,
  examples: problemExamples,
  constraints: problemConstraints,
  templateCode: problemTemplate,
  handleFunction: '',
  starterFunctionName: 'convert',
  level: 'medium'
}
