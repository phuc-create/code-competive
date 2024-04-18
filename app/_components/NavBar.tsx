import Link from 'next/link'
import React from 'react'
import ModeToggle from './ModeToggle'
import SignUpPage from './SignUp'
import LoginPage from './Login'

type NavBarProps = {
  children?: React.ReactNode
}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
      <Link href="/" className="flex items-center justify-center h-20">
        Stuck Overflow
      </Link>
      <div className="flex items-center gap-2">
        <SignUpPage />
        <LoginPage />
        <ModeToggle />
      </div>
    </div>
  )
}
export default NavBar
