import { createBrowserClient } from '@supabase/ssr'
import { Database } from './types/supabase'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPPABASE_ENDPOINT
const supabaseKey = process.env.NEXT_PUBLIC_SUPPABASE_API_KEY

const createSupabaseBrowerClient = () => {
  return createBrowserClient<Database>(supabaseUrl || '', supabaseKey || '')
}
export { createSupabaseBrowerClient }
