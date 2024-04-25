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
      The string <code>"PAYPALISHIRING"</code> is written in a zigzag pattern on
      a given number of rows like this: (you may want to display this pattern in
      a fixed font for better legibility)
    </p>
    <br />
    {/* eslint-disable-next-line prettier/prettier */}
      <pre>
      {/* eslint-disable-next-line prettier/prettier */}
      <pre>P   A   H   N</pre>
      <pre>A P L S I I G </pre>
      {/* eslint-disable-next-line prettier/prettier */}
      <pre>Y   I   R</pre>
    </pre>
    <br />
    <p>
      And then read line by line: <code>"PAHNAPLSIIGYIR"</code>
    </p>
    <p>
      Write the code that will take a string and make this conversion given a
      number of rows:
    </p>
    <br />
    <pre>string convert(string s, int numRows);</pre>
  </>
)

const problemTestcases: TestCases[] = [
  {
    id: 'ex-1',
    input: { s: 'PAYPALISHIRING', numRows: 3 },
    output: 'PAHNAPLSIIGYIR'
  },
  {
    id: 'ex-2',
    input: { s: 'PAYPALISHIRING', numRows: 4 },
    output: 'PINALSIGYAHRPI'
  },
  {
    id: 'ex-3',
    input: { s: 'A', numRows: 1 },
    output: 'A'
  }
]
const handleTestSolution = (cb: (...arg0: InAndOut[]) => InAndOut) => {
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
      <div>
        <code>s</code> consists of English letters (lower-case and upper-case),{' '}
        <code>','</code> and <code>'.'</code>
      </div>
    )
  },
  {
    id: 'cons-3',
    cons: <code>1 &lt;= numRows &lt;= 1000</code>
  }
]
const problemTemplate = `const convert = (s, numRows) => {
  // write your code here
}`
export const zig_zag_conversion_problem: Problem = {
  id: 'zig-zag-conversion',
  number: 1,
  title: 'Zig Zag Conversion',
  description: problemDescription,
  testcases: problemTestcases,
  constraints: problemConstraints,
  templateCode: problemTemplate,
  handleFunction: handleTestSolution,
  starterFunctionName: 'convert',
  level: 'medium'
}
