'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function signup(formData) {
  const supabase = await createClient()
  
  // Get form values
  const email = formData.get('email')
  const password = formData.get('password')
  const confirmPassword = formData.get('confirmPassword')
  const FPOname = formData.get('FPOname')
  
  // Validation
  if (!email || !password || !confirmPassword) {
    return { error: "All fields are required" }
  }
  
  if (password !== confirmPassword) {
    return { error: "Passwords do not match" }
  }
  
  if (password.length < 8) {
    return { error: "Password must be at least 8 characters" }
  }
  
  try {
    // Important: Set redirectTo to your confirmation handler URL
    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          FPOname: FPOname,
        },
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      }
    })
    
    if (error) {
      return { error: error.message }
    }
    
    // Check if email confirmation is required
    if (data?.user?.identities?.length === 0) {
      return { error: "Email already registered" }
    }
    
    // Email confirmation is required
    // Redirect to confirmation page
    redirect('/auth/confirm-email')
  } catch (err) {
    return { error: err.messge }
  }
}