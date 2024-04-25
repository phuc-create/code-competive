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
    <div className="flex items-center justify-between px-2 pt-2 md:px-12">
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      <div className="flex justify-center gap-8">
        <Link
          href="/"
          className="flex items-center justify-center gap-1 rounded-md bg-primary/100 p-3 text-sm font-semibold"
        >
          <span className="text-red-700 ">Solve </span>{' '}
          <span className="text-white dark:text-black">It!</span>
        </Link>
        <div className="flex items-center justify-center gap-2">
          <Link
            href="/problems"
            className="flex items-center justify-center rounded-md p-2 text-sm transition duration-300 ease-in-out hover:bg-primary/5"
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
