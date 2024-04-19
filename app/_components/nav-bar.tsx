'use client'
import Link from 'next/link'
import React from 'react'
import ModeToggle from './mode-toggle'
import SignUpPage from './sign-up'
import LoginPage from './login'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase'
import { UserNav } from './user-nav'
import { useRouter } from 'next/navigation'

type NavBarProps = {
  children?: React.ReactNode
}

const NavBar: React.FC<NavBarProps> = () => {
  const router = useRouter()
  const [user, loading, error] = useAuthState(auth)
  const [signOut, signOutLoading, logOutError] = useSignOut(auth)
  const handleLogout = async () => {
    const success = await signOut()
    if (success) {
      router.push('/auth')
    }
  }
  return (
    <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
      <Link href="/" className="flex items-center justify-center h-20">
        Stuck Overflow
      </Link>
      <div className="flex items-center gap-2">
        {user ? (
          <UserNav
            user={user}
            handleLogout={handleLogout}
            signOutLoading={signOutLoading}
          />
        ) : (
          <>
            <SignUpPage />
            <LoginPage />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  )
}
export default NavBar
