'use client'
import React, { useEffect, useState } from 'react'
import * as monaco from 'monaco-editor'
import Playground from './components/playground'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '../../../components/ui/resizable'
import DescriptionsPage from './components/descriptions'
import { useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebase/firebase'
type ProblemPageProps = {
  params: {
    id: string
  }
}

const PlaygroundWorkspacePage: React.FC<ProblemPageProps> = ({ params }) => {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)
  useEffect(() => {
    if (!user) {
      router.push('/problems')
    }
  }, [user, router])
  if (loading && !user) {
    return 'Authenticating...'
  }

  return (
    <div className="px-12 w-full h-full">
      <ResizablePanelGroup direction="horizontal" className="w-full border">
        <ResizablePanel className="p-2 border-none h-[calc(100vh-58px)]">
          <DescriptionsPage title="101. Zig Zag Conversion">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            velit rerum. Error illum numquam quaerat in perspiciatis, iusto
            delectus architecto, aut neque quas consequuntur. Commodi
            exercitationem culpa inventore officiis non.
          </DescriptionsPage>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="border-none">
          <ResizablePanelGroup direction="vertical" className="border-none">
            <ResizablePanel className="p-2 border-none">
              <Playground language={'typescript'} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>Where I put my test case down</ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
export default PlaygroundWorkspacePage
