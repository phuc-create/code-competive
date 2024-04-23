import { Database } from './types/supabase'

// Type + Supabase + type Name ==> TSB + typeName
export type TSBUser = Database['public']['Tables']['users']['Row'] | null
export type TSBProblem = Database['public']['Tables']['problems']['Row']
