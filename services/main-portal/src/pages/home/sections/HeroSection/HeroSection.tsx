import styled from "styled-components"
import BackgroundImageFile from "./assets/background.png"

const HeroSectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${BackgroundImageFile.src});
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: var(--white);
  padding: 32px;
`

type HeroSectionProps = {
  title?: string
}

export default function HeroSection({ title }: HeroSectionProps) {
  return <HeroSectionWrapper>{title && <h1>{title}</h1>}</HeroSectionWrapper>
}
