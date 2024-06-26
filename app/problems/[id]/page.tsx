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
import ButtonHandle from './components/buttons-handle'

type ProblemPageProps = {
  params: {
    id: string
  }
}

const PlaygroundWorkspacePage: React.FC<ProblemPageProps> = ({ params }) => {
  const [tab, setTab] = useState('description')
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>()
  const onTabChange = (value: string) => {
    setTab(value)
  }

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
      <div className="flex h-[calc(100vh-72px)] w-full items-center justify-center">
        <Icons.spinner />
      </div>
    )
  }

  if (!user) {
    return <Unauthorized />
  }
  return (
    <ProblemContextProvider params={params}>
      <div className="h-[calc(100vh-60px)] w-full px-5">
        <ButtonHandle onTabChange={onTabChange} />
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full border-none"
        >
          <ResizablePanel className="py-2 pr-2">
            <DescriptionsPage tab={tab} onTabChange={onTabChange} />
          </ResizablePanel>
          <ResizableHandle withHandle className="bg-transparent" />
          <ResizablePanel className="border-none">
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel className="py-2 pl-2">
                <Playground language={'javascript'} />
              </ResizablePanel>
              <ResizableHandle withHandle className="bg-transparent" />
              <ResizablePanel className="py-2 pl-2">
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
