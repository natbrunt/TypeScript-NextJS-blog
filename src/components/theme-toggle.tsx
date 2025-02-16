"use client"

import { Moon, Sun } from "lucide-react"
import { useThemeToggle } from "../hooks/use-theme"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeToggle()

  // console.log("Rendered theme:", theme)

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem] text-foreground" /> : <Moon className="h-[1.2rem] w-[1.2rem] text-foreground" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

