import Link from 'next/link'
import React from 'react'
import ModeToggle from './mode-toggle'
import SignUpPage from './sign-up'
import LoginPage from './login'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { auth } from '../../firebase/firebase'
import { UserNav } from './user-nav'
import { logOut } from '../../supabase/requests/auth'
import { getUserCredentials } from '../../supabase/requests/user'
import { createSupabaseServerClient } from '../../supabase/supabaseServer'
import { redirect } from 'next/navigation'

type NavBarProps = {
  children?: React.ReactNode
}

const NavBar = async () => {
  const data = await getUserCredentials()
  // const supabase = createSupabaseServerClient()

  // const { data, error } = await supabase.auth.getUser()
  // if (error || !data?.user) {
  //   redirect('/')
  // }
  console.log(data)
  return (
    <div className="flex items-center justify-between px-2 md:px-12 md:pt-2">
      <pre>{JSON.stringify(data, null, 2)}</pre>
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
        {data ? (
          <UserNav user={data.user} />
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
