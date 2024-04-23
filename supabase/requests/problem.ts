import { createSupabaseServerClient } from '../supabaseServer'

export const getProblem = async (name: string) => {
  const supabase = createSupabaseServerClient()
  const { data: problem, error } = await supabase
    .from('problems')
    .select('*')
    .eq('name', name)
    .maybeSingle()
  return problem
}
