import { PropsWithChildren, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'
import { Icons } from '../icons/icons'
import { getUserCredentials } from '../supabase/requests/user'

const AuthenticationProvider: React.FC<PropsWithChildren> = async ({
  children
}) => {
  // const router = useRouter()
  // const supabaseUser = await getUserCredentials()
  // const [user, loading] = useAuthState(auth)
  // useEffect(() => {
  //   if (!loading && !user) {
  //     router.push('/problems')
  //   }
  // }, [user, router, loading])
  // if (loading) {
  //   return (
  //     <div className="flex m-auto w-full h-full items-center justify-center">
  //       <Icons.spinner />
  //     </div>
  //   )
  // }
  return <>{children}</>
}

export default AuthenticationProvider
