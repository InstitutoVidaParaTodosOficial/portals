import React from "react"
import { useTranslations } from "next-intl"
import styled from "styled-components"
import CircleLogo from "@/components/circle-logo/CircleLogo"
import ReactMarkdown from "react-markdown"
import WatchPropheticWordYouTube from "@/components/sections/watch-prophetic-word-youtube/WatchPropheticWordYouTube"

const DEFAULT_SIDE_PADDING = "10%"

const LogoWrapper = styled.div`
  left: 50%;
  width: 100%;
  transform: translate(0, -50%);
  z-index: 2;
`

const AboutUsContainer = styled.section`
  position: relative;
  text-align: center;
  line-height: 1.7;
  font-size: 1.2rem;

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-weight: normal;
  }
`

const TopSection = styled.div`
  background-color: var(--primary-color);
  color: var(--white);
  padding: 100px ${DEFAULT_SIDE_PADDING};
  background: linear-gradient(#000000, #082d50 28%);
`

const BottomSection = styled.div`
  background-color: var(--background-color);
  padding: 100px ${DEFAULT_SIDE_PADDING};
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
