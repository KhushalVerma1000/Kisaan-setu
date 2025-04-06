"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function TopNavbar() {
  return (
    <header className="w-full h-16 border-b border-[hsl(var(--sidebar-border))] bg-background flex items-center justify-between px-4 md:px-6">
      {/* Left side: Company logo and name */}
      <div className="flex items-center gap-3">
        {/* Company Logo */}
        <div className="h-8 w-8 rounded-md bg-[hsl(var(--sidebar-primary))] flex items-center justify-center">
        <div className="h-8 w-8 overflow-hidden">
  <img 
    src="/Logo.jpeg" 
    alt="Company Logo"
    className="h-full w-full object-contain" 
  />
</div>
        </div>
        
        {/* Company Name */}
        <Link href="/" className="font-bold text-lg">
          Kissan Setu
        </Link>
      </div>
      
      {/* Right side: Authentication buttons */}
      <div className="flex items-center gap-2 md:gap-4">
        <Button variant="ghost" size="sm"
         className="hover:bg-[hsl(var(--sidebar-primary))] hover:text-[hsl(var(--sidebar-primary-foreground))]"
        asChild>
          <Link href="/logIn">Login</Link>
        </Button>
        
        <Button variant="outline" size="sm" 
        className="hover:bg-[hsl(var(--sidebar-primary))] hover:text-[hsl(var(--sidebar-primary-foreground))] text-[hsl(var(--sidebar-primary))] border-[hsl(var(--sidebar-primary))] border-1 rounded-md transition-all duration-200 ease-in-out"
        asChild>
          <Link href="/signup">Sign Up</Link>
        </Button>
        
        <Button 
          size="sm" 
          className="bg-[hsl(var(--sidebar-primary))] text-[hsl(var(--sidebar-primary-foreground))] hover:bg-[hsl(var(--sidebar-primary))/90] hover:text-[hsl(var(--sidebar-primary-background))] hover:border-[hsl(var(--sidebar-primary))] border-1 rounded-md transition-all duration-200 ease-in-out"
          asChild
        >
          <Link href="https://sukrshinfotech.com/Contact/">Contact Us</Link>
        </Button>
      </div>
    </header>
  );
}

export default TopNavbar;