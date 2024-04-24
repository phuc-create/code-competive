import React from 'react'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '../../../components/ui/resizable'
import Playground from './components/playground'
import DescriptionsPage from './components/descriptions'
import TestCasesPage from './components/test-cases'
import { notFound } from 'next/navigation'
import Unauthorized from '../../unauthorized'
import { Icons } from '../../../icons/icons'
import { getUserCredentials } from '../../../supabase/requests/user'
import { getProblem } from '../../../supabase/requests/problem'

type ProblemPageProps = {
  params: {
    id: string
  }
}

const PlaygroundWorkspacePage: React.FC<ProblemPageProps> = async ({
  params
}) => {
  const { user } = await getUserCredentials()
  const problem = await getProblem(params.id)

  if (!problem) {
    return notFound()
  }

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center h-[calc(100vh-72px)] w-full">
  //       <Icons.spinner />
  //     </div>
  //   )
  // }

  if (!user) {
    return <Unauthorized />
  }
  return (
    <div className="px-10 w-full h-full">
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full border-none"
      >
        <ResizablePanel className="p-2 h-[calc(100vh-74px)]">
          <DescriptionsPage
            title={problem.number + '. ' + problem.title}
            problem={problem}
          />
        </ResizablePanel>
        <ResizableHandle withHandle className="bg-transparent" />
        <ResizablePanel className="border-none">
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel className="p-2">
              <Playground
                language={'typescript'}
                code={problem.template_code}
              />
            </ResizablePanel>
            <ResizableHandle withHandle className="bg-transparent" />
            <ResizablePanel className="p-2">
              <TestCasesPage name={problem.name || ''} />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
export default PlaygroundWorkspacePage
