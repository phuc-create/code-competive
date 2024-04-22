'use server'
import { type CookieOptions, createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { Database } from './types/supabase'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPPABASE_ENDPOINT
const supabaseKey = process.env.NEXT_PUBLIC_SUPPABASE_API_KEY

const createSupabaseServerClient = (serverComponent = false) => {
  return createServerClient<Database>(supabaseUrl || '', supabaseKey || '', {
    cookies: {
      get(name: string) {
        return cookies().get(name)?.value
      },
      set(name: string, value: string, options: CookieOptions) {
        if (serverComponent) return
        cookies().set({ name, value, ...options })
      },
      remove(name: string, options: CookieOptions) {
        if (serverComponent) return
        cookies().delete({ name, ...options })
      }
    }
  })
}

export { createSupabaseServerClient }
