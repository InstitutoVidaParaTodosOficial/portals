import HeroSection from "./sections/HeroSection/HeroSection"
import AboutUsSection from "@/pages/home/sections/AboutUsSection/AboutUsSection"
import ProjectsSection from "@/pages/home/sections/ProjectsSection/ProjectsSection"
import MayIPrayForYouSection from "@/pages/home/sections/MayIPrayForYouSection/MayIPrayForYouSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ProjectsSection />
      <MayIPrayForYouSection />
    </>
  )
}
