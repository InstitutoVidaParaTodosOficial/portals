import styled from "styled-components"
import { NextEvent } from "@/types/NextEvent"
import { Anaheim, Abril_Fatface } from "next/font/google"

const aprilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: "400"
})

const anaheim = Anaheim({
  subsets: ["latin"],
  weight: "400"
})

const EventCardWrapper = styled.div<{
  $backgroundColor: string
  $rotateDegrees?: number
}>`
  width: 300px;
  height: 400px;
  background-color: ${props => props.$backgroundColor};
  position: relative;
  transform: rotate(${props => props.$rotateDegrees}deg) scale(0.85);
`

const ContentWrapper = styled.div<{
  $backgroundImage?: string
  $backgroundColor: string
  $textColor: string
}>`
  background-color: ${props => props.$backgroundColor};
  background-image: url("${props => props.$backgroundImage}");
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  top: -16px;
  left: -16px;
  color: ${props => props.$textColor};
  padding: 32px;
`

const EventTitle = styled.h3<{
  $color: string
}>`
  color: ${props => props.$color};
  font-size: 28px;
`

const EventDate = styled.p`
  margin: 0;
`

const EventPlace = styled.p`
  margin: 0 0 16px 0;
`

const EventLink = styled.a<{
  $color: string
}>`
  text-decoration: none;
  color: ${props => props.$color};
  border-bottom: 3px solid;
  padding: 0 8px 5px 8px;
`

type EventCardProps = {
  rotateDegrees?: number
  event: NextEvent
}

export default function EventCard({ event, rotateDegrees }: EventCardProps) {
  return (
    <EventCardWrapper
      data-testid="event-card-wrapper"
      $backgroundColor={event.backgroundColor}
      $rotateDegrees={rotateDegrees}
    >
      <ContentWrapper
        className={anaheim.className}
        $backgroundImage={event.backgroundImage}
        $backgroundColor={event.backgroundColor}
        $textColor={event.textColor}
      >
        <EventTitle $color={event.titleColor || event.textColor} className={aprilFatface.className}>
          {event.title}
        </EventTitle>

        <EventDate>DATA: {event.date}</EventDate>

        <EventPlace>LOCAL: {event.place}</EventPlace>

        <EventLink href={event.link} $color={event.textColor}>
          Saiba Mais
        </EventLink>
      </ContentWrapper>
    </EventCardWrapper>
  )
}
