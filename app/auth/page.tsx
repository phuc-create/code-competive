'use client'
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase'
import { useRouter } from 'next/navigation'

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
    return 'Authenticating...'
  }
  if (error) {
    console.log(error)
  }
  return (
    <div className="flex items-center justify-center flex-col h-[calc(100vh - 5rem)] pointer-events-none select-none">
      Welcome to Stuck Overflow! Have a good coding.
    </div>
  )
}
export default AuthPage
