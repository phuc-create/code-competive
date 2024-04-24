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
    <div className="relative w-full h-full">
      <div className="rounded-md relative w-full h-full border p-4 overflow-hidden overflow-y-scroll">
        <Tabs defaultValue={cases[0].id}>
          <TabsList className="bg-transparent">
            {!results.length ? (
              cases.map((c, i) => (
                <TabsTrigger key={c.id} value={c.id} className="border mr-4">
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
                        className="truncate overflow-hidden text-nowrap text-ellipsis"
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
      <div className="absolute bottom-4 right-4 flex gap-4">
        <Button onClick={handleSubmitSolution}>Run</Button>
        <Button>Submit</Button>
      </div>
    </div>
  )
}
export default TestCasesPage
