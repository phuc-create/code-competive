import Link from 'next/link'
import React from 'react'
import { Button } from '../shadcn/components/ui/button'
import ModeToggle from './ModeToggle'

type NavBarProps = {
  children?: React.ReactNode
}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
      <Link
        href="/"
        className="flex items-center justify-center h-20 text-white"
      >
        Stuck Overflow
      </Link>
      <div className="flex items-center">
        <Button>Sign up</Button>
        <ModeToggle />
      </div>
    </div>
  )
}
export default NavBar
