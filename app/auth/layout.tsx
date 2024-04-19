import React from 'react'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen relative">
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  )
}
export default AuthLayout
