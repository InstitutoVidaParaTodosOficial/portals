import styled from "styled-components"
import { Abril_Fatface, Anaheim } from "next/font/google"

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: "400"
})

const anaheim = Anaheim({
  subsets: ["latin"],
  weight: "400"
})

const CardWrapper = styled.div`
  background-color: white;
  padding: 16px;
  width: 400px;
  border-radius: 8px;
`

const Title = styled.h2`
  color: #f39324;
  margin: 0;
  text-transform: uppercase;
`

const Content = styled.p`
  color: #000;
  text-wrap: auto;
`

type CardProps = {
  title: string
  content: string
}

export default function Card({ title, content }: CardProps) {
  return (
    <CardWrapper>
      <Title className={abrilFatface.className}>{title}</Title>
      <Content className={anaheim.className}>{content}</Content>
    </CardWrapper>
  )
}
