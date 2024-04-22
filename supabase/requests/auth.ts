import { createSupabaseServerClient } from '../supabaseServer'
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
  console.log('loggginggggggg in : ', data)
  console.log('ERROR WHEN LOGGING IN :', error)
  // if (data.url) {
  //   redirect(data.url) // use the redirect API for your server framework
  // }
}

const logOut = async () => {
  const supabase = createSupabaseBrowerClient()
  const { error } = await supabase.auth.signOut()
}

export { loginWithGoogle, logOut }
