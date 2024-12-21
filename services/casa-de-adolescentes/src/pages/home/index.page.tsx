import LandingSection from "@/pages/home/sections/LandingSection/LandingSection"
import EventsSection from "@/pages/home/sections/EventsSection/EventsSection"
import MissionVisionValueSection from "@/pages/home/sections/MissionVisionValueSection/MissionVisionValueSection"
import OurNumbersSection from "@/pages/home/sections/OurNumbersSection/OurNumbersSection"
import HowToBePart from "@/pages/home/sections/HowToBePart/HowToBePart"

export default function HomePage() {
  return (
    <>
      <LandingSection />
      <EventsSection />
      <MissionVisionValueSection />
      <OurNumbersSection />
      <HowToBePart />
    </>
  )
}
