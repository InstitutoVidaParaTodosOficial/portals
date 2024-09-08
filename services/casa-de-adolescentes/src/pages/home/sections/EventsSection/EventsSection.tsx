import styled from "styled-components"
import { NextEvent } from "@/types/NextEvent"
import { Just_Me_Again_Down_Here } from "next/font/google"

import EventCard from "@/components/EventCard/EventCard"

const justMeAgainDownHere = Just_Me_Again_Down_Here({
  subsets: ["latin"],
  weight: "400"
})

const SectionWrapper = styled.section`
  background-color: #eb529c;
  margin: 0;
`

const Title = styled.h2`
  color: #fff;
  margin: 0 0 64px 0;
  font-size: 64px;
  text-align: center;
`

const EventsList = styled.ul`
  display: flex;
  list-style: none;
  overflow: auto;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
  margin: 0;
  li {
    flex-shrink: 0;
    scroll-snap-align: start;
    padding: 0 22px;
  }
`

const MOCK_NEXT_EVENTS: NextEvent[] = [
  {
    id: "1",
    title: "evento 1",
    place: "Flórida, USA",
    date: "26 a 04 de agosto",
    link: "https://google.com",
    backgroundImage: "/image-14.png",
    backgroundColor: "#F39324",
    textColor: "#F39324"
  },
  {
    id: "2",
    title: "Holy Generation Conference\n",
    place: "Flórida, USA",
    date: "26 a 04 de agosto",
    link: "https://google.com",
    backgroundColor: "#1D1C1C",
    textColor: "#FFF",
    titleColor: "#F39324"
  },
  {
    id: "3",
    title: "evento 1",
    place: "Flórida, USA",
    date: "26 a 04 de agosto",
    link: "https://google.com",
    backgroundImage: "/image-14.png",
    backgroundColor: "#F39324",
    textColor: "#F39324"
  },
  {
    id: "4",
    title: "Holy Generation Conference\n",
    place: "Flórida, USA",
    date: "26 a 04 de agosto",
    link: "https://google.com",
    backgroundColor: "#1D1C1C",
    textColor: "#FFF",
    titleColor: "#F39324"
  },
  {
    id: "5",
    title: "Holy Generation Conference\n",
    place: "Flórida, USA",
    date: "26 a 04 de agosto",
    link: "https://google.com",
    backgroundColor: "#1D1C1C",
    textColor: "#FFF",
    titleColor: "#F39324"
  }
]

export default function EventsSection() {
  return (
    <SectionWrapper>
      <Title className={justMeAgainDownHere.className}>Próximos Eventos</Title>

      <EventsList>
        {MOCK_NEXT_EVENTS.map((event, index) => (
          <li key={event.id}>
            <EventCard rotateDegrees={index % 2 === 0 ? -5 : 5} event={event} />
          </li>
        ))}
      </EventsList>
    </SectionWrapper>
  )
}
