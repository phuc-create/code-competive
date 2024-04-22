import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { type CookieOptions, createServerClient } from '@supabase/ssr'
import { createSupabaseServerClient } from '../../../supabase/supabaseServer'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPPABASE_ENDPOINT
const supabaseKey = process.env.NEXT_PUBLIC_SUPPABASE_API_KEY
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/'
  console.log(code)
  if (code) {
    const cookieStore = cookies()
    const supabase = createSupabaseServerClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    console.log('errrrrrorrrrr: ', error)
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`)
    }
    console.log(error)
  }
  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}`)
}
