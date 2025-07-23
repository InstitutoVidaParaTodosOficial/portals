import HeroSection from "./sections/HeroSection/HeroSection"
import AboutUsSection from "@/pages/home/sections/AboutUsSection/AboutUsSection"
import ProjectsSection from "@/pages/home/sections/ProjectsSection/ProjectsSection"

export default function HomePage() {
  return (
    <>
      <HeroSection title="Hello World" />
      <AboutUsSection />
      <ProjectsSection />
    </>
  )
}
