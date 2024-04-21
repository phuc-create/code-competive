import React from 'react'
import { Example } from '../../stores/problem-types'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '../../../../components/ui/tabs'
import { Input } from '../../../../components/ui/input'

type TestCasesPageProps = {
  cases: Example[]
}

const TestCasesPage: React.FC<TestCasesPageProps> = ({ cases }) => {
  // const cases =
  return (
    <div className="rounded-md relative w-full h-full border overflow-hidden p-4">
      <Tabs defaultValue={cases[0].id} className="w-[400px]">
        <TabsList>
          {cases.map((c, i) => (
            <TabsTrigger key={c.id} value={c.id}>
              Case {i + 1}
            </TabsTrigger>
          ))}
        </TabsList>

        {cases.map((c, i) => {
          const { var_name, input } = c
          const testcases = var_name.map((varName, i) => ({
            id: i,
            varName,
            input: input[i]
          }))
          return (
            <TabsContent key={c.id} value={c.id}>
              {testcases.map(testcase => (
                <div key={testcase.id} className="flex flex-col">
                  <span>{testcase.varName} = </span>
                  <Input disabled value={testcase.input?.toString()} />
                </div>
              ))}
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}
export default TestCasesPage
