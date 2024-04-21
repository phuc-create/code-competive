import React from 'react'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '../../../components/ui/resizable'
import Playground from './components/playground'
import DescriptionsPage from './components/descriptions'
import TestCasesPage from './components/test-cases'
import { problemsBasepathMock } from '../stores/problems'
import { Problem } from '../stores/problem-types'
import { notFound } from 'next/navigation'

type ProblemPageProps = {
  params: {
    id: string
  }
}
export const generateStaticParams = async () => {
  const problems = Object.keys(problemsBasepathMock).map(p => ({
    id: p
  }))

  return problems
}

const getProblem = (id: string): { problem: Problem | null } => {
  const problem = problemsBasepathMock[id]
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!problem) {
    // This will activate the closest `error.js` Error Boundary
    return { problem: null }
  }

  return {
    problem
  }
}

const PlaygroundWorkspacePage: React.FC<ProblemPageProps> = ({ params }) => {
  const problem = getProblem(params.id)
  if (!problem.problem) {
    notFound()
  }
  const { problem: prob } = problem
  console.log(prob)
  return (
    <div className="px-10 w-full h-full">
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full border-none"
      >
        <ResizablePanel className="p-2 h-[calc(100vh-74px)]">
          <DescriptionsPage
            title={prob.number + '. ' + prob.title}
            problem={prob}
          />
        </ResizablePanel>
        <ResizableHandle withHandle className="bg-transparent" />
        <ResizablePanel className="border-none">
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel className="p-2">
              <Playground language={'typescript'} code={prob.templateCode} />
            </ResizablePanel>
            <ResizableHandle withHandle className="bg-transparent" />
            <ResizablePanel className="p-2">
              <TestCasesPage cases={prob.examples} />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
export default PlaygroundWorkspacePage
