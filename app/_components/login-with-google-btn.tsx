'use client'
import React from 'react'
import { Button } from '../../components/ui/button'
// import { loginWithGoogle } from '../../supabase/requests/auth'
import { Icons } from '../../icons/icons'
import { loginWithGoogle } from '../../supabase/requests/auth'

const LogInWithGoogleBtn = () => {
  return (
    <Button variant="outline" onClick={loginWithGoogle}>
      <Icons.google className="mr-2 h-4 w-4" />
      Google
    </Button>
  )
}
export default LogInWithGoogleBtn
