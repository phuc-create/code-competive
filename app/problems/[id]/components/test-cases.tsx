import React from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '../../../../components/ui/tabs'
import { Input } from '../../../../components/ui/input'
import { problemsStore } from '../../stores/problems'
import { Button } from '../../../../components/ui/button'

type TestCasesPageProps = {
  name: string | null
  // cases: Example[]
}

const getProblemLocally = (name: string) => {
  const found = problemsStore[name]
  if (found) {
    return found
  }
  return null
}

const TestCasesPage: React.FC<TestCasesPageProps> = ({ name }) => {
  const cases = getProblemLocally(name || '')?.testcases || []
  if (!cases.length) return null

  return (
    <div className="rounded-md relative w-full h-full border overflow-hidden p-4">
      <Tabs defaultValue={cases[0].id}>
        <TabsList>
          {cases.map((c, i) => (
            <TabsTrigger key={c.id} value={c.id}>
              Case {i + 1}
            </TabsTrigger>
          ))}
        </TabsList>

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
        })}
      </Tabs>
      <div className="absolute bottom-4 right-4 flex gap-4">
        <Button>Run</Button>
        <Button>Submit</Button>
      </div>
    </div>
  )
}
export default TestCasesPage
