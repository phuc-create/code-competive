'use client'
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react'
import { GoogleAuthProvider, AuthProvider } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'

const AuthenticationProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)
  useEffect(() => {
    if (!loading && !user) {
      router.push('/problems')
    }
  }, [user, router, loading])
  if (loading) {
    return '...'
  }
  return <>{children}</>
}

export default AuthenticationProvider
