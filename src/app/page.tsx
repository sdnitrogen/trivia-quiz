import LandingHero from "@/components/LandingHero"
import ThemeSwitcher from "@/components/ThemeSwitcher"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full gap-[85px]">
      <ThemeSwitcher />
      <LandingHero />
    </main>
  )
}
