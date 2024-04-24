import React from 'react'
import { TestCases } from '../../stores/problem-types'
import { TabsContent } from '../../../../components/ui/tabs'
import { Input } from '../../../../components/ui/input'

type TestcasesBoardProps = {
  cases: TestCases[]
}

const TestcasesBoard: React.FC<TestcasesBoardProps> = ({ cases }) => {
  return (
    <>
      {cases.map(c => {
        const { input } = c
        const testcases = Object.entries(input).map(([el, v], i) => ({
          id: i,
          name: el,
          input: v
        }))
        return (
          <TabsContent key={c.id} value={c.id}>
            {testcases.map(testcase => (
              <div key={testcase.id} className="flex flex-col">
                <span>{testcase.name} = </span>
                <Input
                  disabled
                  value={testcase.input?.toString()}
                  className="truncate overflow-hidden text-nowrap text-ellipsis"
                />
              </div>
            ))}
          </TabsContent>
        )
      })}{' '}
    </>
  )
}
export default TestcasesBoard
