'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function login(formData) {
  const supabase = await createClient()
  
  const email = formData.get('email')
  const password = formData.get('password')
  
  // Basic validation
  if (!email || !password) {
    return { error: "Email and password are required" }
  }
  
  // Attempt to sign in
  const { error, data } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  
  // If there's an error, return it to the form
  if (error) {
    return { error: error.message }
  }
  
  // Update cache to reflect new auth state
  revalidatePath('/', 'layout')
  
  // If successful, redirect to dashboard
  redirect('/dashboard')
}