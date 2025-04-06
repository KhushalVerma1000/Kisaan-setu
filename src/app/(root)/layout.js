import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "kisaan Setu",
  description: "Kisaan setu is a software developed by sykrsh infotech for Fpos",
};

export default async function DashboardLayout({ children }) {

  const supabase = await createClient()
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    redirect('/login')
  }
  return (
   
        <main>

        <SidebarProvider>
      <AppSidebar />
      <main>
        <div className=" border-2 w-lvw flex gap-2 align-middle items-center justify-start"> 
          <SidebarTrigger />
        <h1 className=" text-2xl font-bold">Udaan Farmer Producer Company  Limited</h1>
        </div>
       
        
        {children}
      </main>
    </SidebarProvider>

        </main>
     
  );
}
