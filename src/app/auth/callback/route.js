import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  
  if (code) {
    const supabase = await createClient()
    await supabase.auth.exchangeCodeForSession(code)
    
    // Redirect to dashboard after successful confirmation
    return NextResponse.redirect(new URL('/dashboard', requestUrl.origin))
  }
  
  // Something went wrong, redirect to login
  return NextResponse.redirect(new URL('/login', requestUrl.origin))
}