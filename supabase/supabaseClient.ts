import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPPABASE_ENDPOINT
const supabaseKey = process.env.NEXT_PUBLIC_SUPPABASE_API_KEY

const createSupabaseBrowerClient = () => {
  return createBrowserClient(supabaseUrl || '', supabaseKey || '')
}
export { createSupabaseBrowerClient }
