import LandingSection from "@/pages/home/sections/LandingSection/LandingSection"
import EventsSection from "@/pages/home/sections/EventsSection/EventsSection"
import MissionVisionValueSection from "@/pages/home/sections/MissionVisionValueSection/MissionVisionValueSection"
import OurNumbersSection from "@/pages/home/sections/OurNumbersSection/OurNumbersSection"
import HowToJoinSection from "@/pages/home/sections/HowToJoinSection/HowToJoinSection"
import StayUpSection from "@/pages/home/sections/StayUpSection/StayUpSection"

export default function HomePage() {
  return (
    <>
      <LandingSection />
      <EventsSection />
      <MissionVisionValueSection />
      <OurNumbersSection />
      <HowToJoinSection />
      <StayUpSection />
    </>
  )
}
