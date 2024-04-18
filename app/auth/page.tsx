import React from 'react'

type AuthPageProps = {
  string?: string
}

const AuthPage: React.FC<AuthPageProps> = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[calc(100vh - 5rem)] pointer-events-none select-none">
      Welcome to Stuck Overflow! Have a good coding.
    </div>
  )
}
export default AuthPage
