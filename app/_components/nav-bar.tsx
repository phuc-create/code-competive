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
  const [user] = useAuthState(auth)
  const [signOut, signOutLoading] = useSignOut(auth)
  const handleLogout = async () => {
    const success = await signOut()
    if (success) {
      router.push('/auth')
    }
  }
  return (
    <div className="flex items-center justify-between px-2 md:px-12 md:pt-2">
      <div className="flex gap-8 justify-center">
        <Link
          href="/"
          className="flex items-center font-semibold justify-center p-3 rounded-md gap-1 bg-primary/100"
        >
          <span className="text-red-700 ">Stuck </span>{' '}
          <span className="dark:text-black text-white">Overflow</span>
        </Link>
        <div className="flex gap-2 justify-center items-center">
          <Link
            href="/problems"
            className="flex items-center justify-center p-2 rounded-md transition ease-in-out duration-300 hover:bg-primary/5"
          >
            Problems
          </Link>
        </div>
      </div>
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
