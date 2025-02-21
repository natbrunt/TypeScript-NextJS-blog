"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import { useState } from "react";

interface NavbarProps {
  authority: string;
}

export function Navbar({ authority }: NavbarProps) {
  
  const [imageSrc, setImageSrc] = useState("/images/articleFeed-logo.jpeg");
  return (
    <nav className="bg-primary text-primary-foreground shadow-lg dark:bg-background dark:text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold flex items-center space-x-2">
               <Image 
               src={imageSrc}
               alt="Article Feed"
               width={40} // Adjust size as needed
               height={40}
               className="rounded-full object-contain" // Ensures logo fits nicely
              />
              <h1>Natbrunt</h1>
              
            </Link>
          </div>
          <div className="flex">
            <Button variant="ghost" asChild>
               {authority == 'admin' ? 
              <Link href="/admin/submit-article">Admin</Link>
              : <Link href="/login">Admin</Link> }
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/about">About</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}


