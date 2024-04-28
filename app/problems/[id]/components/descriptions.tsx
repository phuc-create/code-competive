'use client'
import React from 'react'
import { Badge } from '../../../../components/ui/badge'
import { TestCases } from '../../stores/problem-types'
import { useProblem } from '../context'
import { ScrollArea } from '../../../../components/ui/scroll-area'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '../../../../components/ui/tabs'
import SubmissionStatus from './submission-status'
import { CheckCircledIcon, StopwatchIcon } from '@radix-ui/react-icons'
import SolutionsPage from './solutions'

type DescriptionsPageProps = {
  tab: string
  onTabChange: (tab: string) => void
  children?: React.ReactNode
}
const ExampleBlock = ({
  example,
  index
}: {
  example: TestCases
  index: number
}) => {
  const { input, output } = example
  const inputPartern = Object.entries(input).map(([el, v]) => `${el} = ${v}`)
  return (
    <div className="mb-2">
      <p>
        <strong className="example">Example {index + 1}:</strong>
      </p>

      <pre className="flex flex-col">
        <div>
          <strong>Input:</strong> {inputPartern.join(', ')}
        </div>

        <div>
          <strong>Output:</strong> {output?.toString()}
        </div>
        <div>
          {example.explaination ? (
            <>
              <strong>Explanation:</strong>
              {example.explaination}
            </>
          ) : null}
        </div>
      </pre>
    </div>
  )
}

const DescriptionsPage: React.FC<DescriptionsPageProps> = ({
  tab,
  onTabChange,
  children
}) => {
  const { problem, problemLocal } = useProblem()
  if (!problem || !problemLocal) return null
  return (
    <div className="relative flex h-full w-full flex-col rounded-md border py-2 pl-2">
      <ScrollArea>
        <Tabs
          defaultValue="description"
          className="relative left-0 top-0 pr-2"
          value={tab}
          onValueChange={onTabChange}
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="submission">Submission</TabsTrigger>
            <TabsTrigger value="solutions">Solutions</TabsTrigger>
          </TabsList>
          <TabsContent value="description">
            <span className="mb-4 text-2xl font-medium">
              {problem.number + '. ' + problem.title}
            </span>
            <div className="mb-3 flex w-full items-center justify-start">
              <Badge variant={problem.level} className="mr-4">
                <span className="capitalize">{problem.level}</span>
              </Badge>
              {problem.problem_overview.length ? (
                <CheckCircledIcon className="h-5 w-5" color="green" />
              ) : (
                <StopwatchIcon />
              )}
            </div>
            <section className="h-auto">
              <div
                className="felx h-full w-full flex-col gap-4"
                data-track-load="description_content"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: problem.descriptions || ''
                  }}
                ></div>
                <br />

                {problemLocal?.testcases.map((example, index) => {
                  return (
                    <ExampleBlock
                      key={example.id}
                      example={example}
                      index={index}
                    />
                  )
                })}

                <p>&nbsp;</p>
                <strong>Constraints:</strong>
                <ul
                  className="list-disc"
                  dangerouslySetInnerHTML={{
                    __html: problem.constraints || ''
                  }}
                ></ul>
              </div>
              {children}
            </section>
            <p className="mt-4">Categories: </p>
            <div className="mt-2 flex items-center justify-start gap-4">
              {problem.categories?.map(cate => (
                <Badge key={cate} variant="secondary">
                  {cate}
                </Badge>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="submission">
            <SubmissionStatus />
          </TabsContent>
          <TabsContent value="solutions">
            <SolutionsPage />
          </TabsContent>
        </Tabs>
      </ScrollArea>
    </div>
  )
}
export default DescriptionsPage
