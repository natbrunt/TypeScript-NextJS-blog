"use client"

import { Moon, Sun } from "lucide-react"
import { useThemeToggle } from "../hooks/use-theme"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeToggle()

  // console.log("Rendered theme:", theme)

  // return (
  //   <Button 
  //     className="hover:bg-[hsl(230,30%,10%)]
  // dark:hover:bg-accent group dark:hover:border-white"
  //     variant="outline" 
  //     size="icon" 
  //     onClick={toggleTheme}>
  //     {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem] text-foreground" /> : <Moon className="h-[1.2rem] w-[1.2rem] text-foreground group-hover:text-white" />}
  //     <span className="sr-only">Toggle theme</span>
  //   </Button>
  // )
  return (
    <Button 
      className="hover:bg-[hsl(230,30%,10%)] dark:hover:bg-accent group dark:hover:border-white
        transition-colors duration-300 ease-in-out transform hover:scale-110"
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}>
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-foreground transition-all duration-300 ease-in-out transform group-hover:scale-110" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-foreground group-hover:text-white transition-all duration-300 ease-in-out transform group-hover:scale-110" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

