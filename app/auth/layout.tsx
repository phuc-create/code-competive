import React from 'react'
import NavBar from '../_components/NavBar'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen relative">
      <div className="max-w-7xl mx-auto">
        <NavBar />
        {children}
      </div>
    </div>
  )
}
export default AuthLayout
