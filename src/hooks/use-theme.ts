"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export const useThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    //console.log("Current theme:", theme)
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return { theme: mounted ? theme : undefined, toggleTheme }
}

