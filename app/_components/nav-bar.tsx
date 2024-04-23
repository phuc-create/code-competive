import Link from 'next/link'
import React from 'react'
import ModeToggle from './mode-toggle'
import SignUpPage from './sign-up'
import LoginPage from './login'
import { UserNav } from './user-nav'
import { getUserCredentials } from '../../supabase/requests/user'

const NavBar = async () => {
  const { user } = await getUserCredentials()
  return (
    <div className="flex items-center justify-between px-2 md:px-12 md:pt-2">
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      <div className="flex gap-8 justify-center">
        <Link
          href="/"
          className="flex items-center font-semibold justify-center p-3 rounded-md gap-1 bg-primary/100"
        >
          <span className="text-red-700 ">Solve </span>{' '}
          <span className="dark:text-black text-white">It!</span>
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
          <UserNav user={user} />
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
