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

export const getUserCredentials = async () => {
  const supabase = createSupabaseServerClient()
  const { data } = await supabase.auth.getUser()
  return data
}
