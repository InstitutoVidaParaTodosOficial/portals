import React from "react"
import { useTranslations } from "next-intl"
import styled from "styled-components"
import CircleLogo from "@/components/circle-logo/CircleLogo"
import ReactMarkdown from "react-markdown"

const LogoWrapper = styled.div`
  left: 50%;
  z-index: 2;
  position: absolute;
  transform: translate(-50%, -50%);
`

const AboutUsContainer = styled.div`
  text-align: center;
`

const TopSection = styled.section`
  background-color: var(--primary-color);
  color: var(--white);
  background: linear-gradient(#000000, #082d50 28%);
`

const BottomSection = styled.section`
  background-color: var(--background-color);
`

const TitleWrapper = styled.div`
  border-bottom: 1px solid black;
`

export default function AboutUsSection() {
  const t = useTranslations("about_us")

  return (
    <AboutUsContainer>
      <TopSection>
        <ReactMarkdown>{t("summary")}</ReactMarkdown>
      </TopSection>

      <LogoWrapper>
        <CircleLogo size={120} borderSize={10} />
      </LogoWrapper>

      <BottomSection>
        <TitleWrapper>
          <h1>{t("title")}</h1>
        </TitleWrapper>

        <h2>{t("subtitle")}</h2>
        <p>{t("descripttion")}</p>
      </BottomSection>
    </AboutUsContainer>
  )
}
