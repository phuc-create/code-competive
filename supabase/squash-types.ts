import { Database } from './types/supabase'

// Type + Supabase + type Name ==> TSB + typeName

type Base = Database['public']['Tables']
export type TSBUser = Base['users']['Row'] | null
export type TSBProblem = Base['problems']['Row'] & {
  problem_overview: Base['problem_overview']['Row'][]
}
