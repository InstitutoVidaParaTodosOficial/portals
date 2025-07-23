import styled from "styled-components"
import BackgroundImageFile from "./assets/background.png"

const HeroSectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${BackgroundImageFile.src});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  color: var(--white);
  padding: 32px;
`

type HeroSectionProps = {
  title?: string
}

export default function HeroSection({ title }: HeroSectionProps) {
  return <HeroSectionWrapper>{title && <h1>{title}</h1>}</HeroSectionWrapper>
}
