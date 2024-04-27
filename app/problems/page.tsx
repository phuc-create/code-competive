'use client'
import React, { useEffect, useState } from 'react'
import DataTable from '../components/data-table'
import { columns } from './components/problems-columns'
import { TSBProblem } from '../../supabase/squash-types'
import { Icons } from '../../icons/icons'
import { createSupabaseBrowerClient } from '../../supabase/supabaseClient'
import { getUserClient } from '../../supabase/requests/user'

// type pageProps = {

// };

const ProblemsPage: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [problems, setProblems] = useState<TSBProblem[] | null>()
  useEffect(() => {
    const getProblems = async () => {
      const supabase = createSupabaseBrowerClient()
      const { data } = await getUserClient()
      const { data: problems, error } = await supabase
        .from('problems')
        .select(
          `
      *,
      problem_overview (
        *
      )
      `
        )
        .eq('problem_overview.user_id', data?.id || '')
      setProblems(problems)
    }
    getProblems()
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-72px)] w-full items-center justify-center">
        <Icons.spinner />
      </div>
    )
  }
  return (
    <div className="flex-1 flex-col items-center justify-between px-2 md:px-12">
      <DataTable
        data={
          problems?.map(p => ({
            ...p,
            status: p.problem_overview.find(v => v.status === 'solved')
              ? 'solved'
              : 'unsolved'
          })) || []
        }
        columns={columns || []}
      />
    </div>
  )
}
export default ProblemsPage
