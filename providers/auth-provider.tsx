'use client'
import { PropsWithChildren, useEffect } from 'react'
import { notFound, redirect, useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'
import { Icons } from '../icons/icons'
import { getUserCredentials } from '../supabase/requests/user'
import { User } from '@supabase/supabase-js'

const AuthenticationProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  // const supabaseUser = await getUserCredentials()
  // const [user, loading] = useAuthState(auth)

  // useEffect(() => {
  //   if (!user) {
  //     router.push('/problems')
  //   }
  // }, [router, user])
  // if (loading) {
  //   return (
  //     <div className="flex m-auto w-full h-full items-center justify-center">
  //       <Icons.spinner />
  //     </div>
  //   )
  // }
  // if (!user) return notFound()
  return <>{children}</>
}

export default AuthenticationProvider
