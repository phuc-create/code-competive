'use client'
import React from 'react'
import { TestCases } from '../../stores/problem-types'
import { TabsContent } from '../../../../components/ui/tabs'
import { Input } from '../../../../components/ui/input'
import { useProblem } from '../context'
import Seperator from '../../../_components/seperator'

const TestcasesBoard: React.FC = () => {
  const { results } = useProblem()
  return (
    <>
      {results.map(c => {
        const { input, expected, output, success } = c
        const testcases = Object.entries(input).map(([el, v], i) => ({
          id: i,
          name: el,
          input: v
        }))
        return (
          <TabsContent key={c.case} value={c.case.toString()}>
            {testcases.map(testcase => (
              <div key={testcase.id} className="flex flex-col">
                <span>{testcase.name} = </span>
                <Input
                  disabled
                  value={testcase.input?.toString()}
                  className={`overflow-hidden truncate text-ellipsis text-nowrap ${success ? 'border-green-600' : 'border-destructive'}`}
                />
                <Seperator className="mt-4" />
                <span className="mb-2 mt-3">Expected:</span>
                <Input
                  disabled
                  value={expected?.toString()}
                  className={`overflow-hidden truncate text-ellipsis text-nowrap ${success ? 'border-green-600' : 'border-destructive'}`}
                />
                <span className="mb-2 mt-3">Got: </span>
                <Input
                  disabled
                  value={output + ''}
                  className={`overflow-hidden truncate text-ellipsis text-nowrap ${success ? 'border-green-600' : 'border-destructive'}`}
                />
              </div>
            ))}
          </TabsContent>
        )
      })}
    </>
  )
}
export default TestcasesBoard