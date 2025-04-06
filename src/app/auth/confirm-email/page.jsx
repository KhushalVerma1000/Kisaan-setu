// app/auth/confirm-email/page.jsx
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function ConfirmEmailPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md p-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="rounded-full bg-blue-100 p-3">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-6 w-6 text-blue-600"
            >
              <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path>
              <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
            </svg>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Check your email</h1>
            <p className="text-muted-foreground">
              We've sent a verification link to your email address.
              Please click the link to verify your account.
            </p>
          </div>
          
          <div className="space-y-4 w-full">
            <p className="text-sm text-muted-foreground">
              Once verified, you'll be automatically redirected to the dashboard.
            </p>
            <div className="pt-4">
              <Link 
                href="/login" 
                className="text-sm text-blue-600 hover:underline"
              >
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}