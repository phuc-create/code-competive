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
import { problemsBasepathMock } from '../stores/problems'
import { Problem } from '../stores/problem-types'
import { notFound } from 'next/navigation'
// import { getUserCredentials } from '../../../supabase/requests/user'
import Unauthorized from '../../unauthorized'
import { User } from '@supabase/supabase-js'
import { Icons } from '../../../icons/icons'
import { createSupabaseBrowerClient } from '../../../supabase/supabaseClient'

type ProblemPageProps = {
  params: {
    id: string
  }
}
// export const generateStaticParams = async () => {
//   const problems = Object.keys(problemsBasepathMock).map(p => ({
//     id: p
//   }))

//   return problems
// }

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
  const [userProfile, setUserProfile] = useState<User | null>()
  const [loading, setLoading] = useState(true)
  // const { user } = await getUserCredentials()
  const problem = getProblem(params.id)

  useEffect(() => {
    const getUserCredentials = async () => {
      const supabase = createSupabaseBrowerClient()
      const { data } = await supabase.auth.getUser()
      if (data.user) {
        setUserProfile(() => data.user)
      }
      setLoading(false)
    }
    getUserCredentials()
  }, [])

  if (!problem.problem) {
    notFound()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-72px)] w-full">
        <Icons.spinner />
      </div>
    )
  }

  if (!userProfile) {
    return <Unauthorized />
  }
  const { problem: prob } = problem
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
