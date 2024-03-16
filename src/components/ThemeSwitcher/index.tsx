"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"

type Props = {}

const ThemeSwitcher = (props: Props) => {
  const { theme, setTheme } = useTheme()
  const handleSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <div className="flex items-center gap-4">
      <Sun className="h-[1.2rem] w-[1.2rem]" />
      <Switch id="theme-switcher" onClick={handleSwitch} />
      <Moon className="h-[1.2rem] w-[1.2rem]" />
    </div>
  )
}

export default ThemeSwitcher
