'use client'
import React from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '../../../../components/ui/tabs'
import { Input } from '../../../../components/ui/input'
import { Button } from '../../../../components/ui/button'
import { useProblem } from '../context'
import TestcasesBoard from './test-cases-board'
import TestCasesTab from './test-cases-tab'

type TestCasesPageProps = {
  name?: string | null
}

const TestCasesPage: React.FC<TestCasesPageProps> = () => {
  const { problem, problemLocal, codeValue, results, handleProcessSolution } =
    useProblem()
  if (!problemLocal?.testcases.length) return null
  const cases = problemLocal?.testcases

  const handleSubmitSolution = () => {
    console.log(codeValue)
    handleProcessSolution(
      codeValue,
      problemLocal.handleFunction,
      problem?.starter_func_name || ''
    )
  }
  return (
    <div className="relative h-full w-full">
      <div className="relative h-full w-full overflow-hidden overflow-y-scroll rounded-md border p-4">
        <Tabs defaultValue={cases[0].id}>
          <TabsList className="bg-transparent">
            {!results.length ? (
              cases.map((c, i) => (
                <TabsTrigger key={c.id} value={c.id} className="mr-4 border">
                  Case {i + 1}
                </TabsTrigger>
              ))
            ) : (
              <TestCasesTab />
            )}
          </TabsList>

          {!results.length ? (
            cases.map(c => {
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
                        className="overflow-hidden truncate text-ellipsis text-nowrap"
                      />
                    </div>
                  ))}
                </TabsContent>
              )
            })
          ) : (
            <TestcasesBoard />
          )}
        </Tabs>
      </div>
    </div>
  )
}
export default TestCasesPage
