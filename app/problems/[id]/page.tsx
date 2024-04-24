'use client'
import React, { useEffect, useState } from 'react'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '../../../components/ui/resizable'
import Playground from './components/playground'
import DescriptionsPage from './components/descriptions'
import TestCasesPage from './components/test-cases'
import Unauthorized from '../../unauthorized'
import { Icons } from '../../../icons/icons'
import { ProblemContextProvider } from './context'
import { createSupabaseBrowerClient } from '../../../supabase/supabaseClient'
import { User } from '@supabase/supabase-js'

type ProblemPageProps = {
  params: {
    id: string
  }
}

const PlaygroundWorkspacePage: React.FC<ProblemPageProps> = ({ params }) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>()
  useEffect(() => {
    const getUserCredentials = async () => {
      const supabase = createSupabaseBrowerClient()
      const {
        data: { user }
      } = await supabase.auth.getUser()
      setUser(user)
      setLoading(() => false)
    }
    getUserCredentials()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-72px)] w-full">
        <Icons.spinner />
      </div>
    )
  }

  if (!user) {
    return <Unauthorized />
  }
  return (
    <ProblemContextProvider params={params}>
      <div className="px-10 w-full h-full">
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full border-none"
        >
          <ResizablePanel className="p-2 h-[calc(100vh-74px)]">
            <DescriptionsPage />
          </ResizablePanel>
          <ResizableHandle withHandle className="bg-transparent" />
          <ResizablePanel className="border-none">
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel className="p-2">
                <Playground language={'javascript'} />
              </ResizablePanel>
              <ResizableHandle withHandle className="bg-transparent" />
              <ResizablePanel className="p-2">
                <TestCasesPage />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </ProblemContextProvider>
  )
}
export default PlaygroundWorkspacePage
