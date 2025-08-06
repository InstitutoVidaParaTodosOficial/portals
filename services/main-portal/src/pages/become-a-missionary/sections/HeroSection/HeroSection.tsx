import styled from "styled-components"
import BackgroundImageFile from "./assets/background.png"
import ComasImageFile from "./assets/comas.png"
import { Blinker } from "next/font/google"
import { useTranslations } from "next-intl"
import React from "react"

const blinker = Blinker({
  subsets: ["latin"],
  weight: "400",
  style: "normal"
})

const HeroSectionContainer = styled.section`
  position: absolute;
  text-align: left;
  width: 910px;
  top: 19rem;
  left: 9rem;
  right: 6rem;
  font-family: ${blinker.style.fontFamily};
  color: var(--white);

  h1 {
    font-size: 2rem;
    line-height: 100%;
  }

  h2 {
    font-size: 3rem;
    line-height: 100%;
  }

  h3 {
    font-size: 2rem;
    line-height: 100%;
  }
`

const HeroBackgroundWrapper = styled.section`
  display: flex;
  position: relative;
  top: -6.5625rem;
  height: 144.6875rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${BackgroundImageFile.src});
  background-size: cover;
  background-position: center;
`

const HeroComasWrapper = styled.section`
  position: absolute;
  left: 65px;
  top: 602px;
  background-image: url(${ComasImageFile.src});
`

export default function HeroSection() {
  const t = useTranslations("become-a-missionary")

  const renderWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ))
  }

  return (
    <HeroBackgroundWrapper>
      <HeroComasWrapper></HeroComasWrapper>
      <HeroSectionContainer>
        <h1>{t("title")} </h1>
        <h2>{renderWithLineBreaks(t("subtitle"))}</h2>
        <h3>{renderWithLineBreaks(t("text"))}</h3>
      </HeroSectionContainer>
    </HeroBackgroundWrapper>
  )
}
