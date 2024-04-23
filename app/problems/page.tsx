import React from 'react'
import DataTable from '../components/data-table'
import { columns } from './components/problems-columns'
import { createSupabaseServerClient } from '../../supabase/supabaseServer'

// type pageProps = {

// };

const ProblemsPage: React.FC = async () => {
  const supabase = createSupabaseServerClient()

  const { data: problems, error } = await supabase.from('problems').select(`
  *,
   problem_overview (
    *
  )
`)

  console.log('PROBLEMS DEBUG: ', problems, error)
  return (
    <div className="flex-1 flex-col items-center justify-between px-12">
      <DataTable data={problems || []} columns={columns || []} />
    </div>
  )
}
export default ProblemsPage
