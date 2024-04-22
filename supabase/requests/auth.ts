import { redirect } from 'next/navigation'
import { createSupabaseBrowerClient } from '../supabaseClient'

// const loginWithGoogle = async () => {
//   const supabase = createSupabaseBrowerClient()
//   if (supabase) {
//     const { data } = await supabase.auth.signInWithOAuth({
//       provider: 'google',
//       options: {
//         redirectTo: `${origin}/problems/callback`
//       }
//     })
//     console.log('loggginggggggg in : ', data)
//     // if (data.url) {
//     //   redirect(data.url) // use the redirect API for your server framework
//     // }
//   }
// }

const loginWithGoogle = async () => {
  const supabase = createSupabaseBrowerClient()
  if (!supabase) return
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/problems/callback`
    }
  })
}

const logOut = async () => {
  const supabase = createSupabaseBrowerClient()
  const { error } = await supabase.auth.signOut({})
  if (error) console.log(error)
}

export { loginWithGoogle, logOut }
