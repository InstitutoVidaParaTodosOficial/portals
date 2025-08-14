import styled from "styled-components"
import BackgroundImageFile from "./assets/background.png"
import { useTranslations } from "next-intl"
import React from "react"
import ReactMarkdown from "react-markdown"

const HeroBackgroundWrapper = styled.section`
  display: flex;
  position: relative;
  padding: 100px 32px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${BackgroundImageFile.src});
  background-size: cover;
  background-position: center;
  color: var(--white);
`

const Title = styled.h1`
  padding-bottom: 8px;
  border-bottom: 1px solid white;
`

export default function HeroSection() {
  const t = useTranslations("become-a-missionary")

  return (
    <HeroBackgroundWrapper>
      <Title>{t("title")} </Title>
      <ReactMarkdown>{t("text")}</ReactMarkdown>
    </HeroBackgroundWrapper>
  )
}
