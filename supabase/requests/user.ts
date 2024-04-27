import { createSupabaseBrowerClient } from '../supabaseClient'
import { createSupabaseServerClient } from '../supabaseServer'

export const getUser = async (userID: string) => {
  try {
    const supabase = createSupabaseServerClient()
    const user = await supabase.from('users').select('*').eq('user_id', userID)
    return user
  } catch (error) {
    console.log(error)
  }
}
export const getUserClient = async () => {
  const supabase = createSupabaseBrowerClient()
  const { data } = await supabase.auth.getUser()
  const user = await supabase
    .from('users')
    .select('*')
    .eq('user_id', data.user?.id || '')
    .maybeSingle()
  return user
}

export const getUserCredentials = async () => {
  const supabase = createSupabaseServerClient()
  const { data } = await supabase.auth.getUser()
  return data
}
export const getUserCredentialsClient = async () => {
  const supabase = createSupabaseBrowerClient()
  const { data } = await supabase.auth.getUser()
  return data
}
