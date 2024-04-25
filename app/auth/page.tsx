'use client'
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase'
import { useRouter } from 'next/navigation'
import { Icons } from '../../icons/icons'

type AuthPageProps = {
  string?: string
}

const AuthPage: React.FC<AuthPageProps> = () => {
  const router = useRouter()
  const [user, loading, error] = useAuthState(auth)
  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user, router])
  if (loading) {
    return (
      <div className="m-auto flex h-full w-full items-center justify-center">
        <Icons.spinner />
      </div>
    )
  }
  if (error) {
    console.log(error)
  }
  return (
    <div className="h-[calc(100vh - 5rem)] pointer-events-none flex select-none flex-col items-center justify-center">
      Welcome to Stuck Overflow! Have a good coding.
    </div>
  )
}
export default AuthPage
