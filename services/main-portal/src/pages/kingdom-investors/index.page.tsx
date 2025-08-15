import styled from "styled-components"
import { useTranslations } from "next-intl"
import ReactMarkdown from "react-markdown"

import HeroSection from "@/pages/kingdom-investors/sections/HeroSection/HeroSection"
import YouTubeVideoPlayer from "@/components/youtube-video-player/YouTubeVideoPlayer"
import MayIPrayForYouButton from "@/components/may-i-pray-for-you-button/MayIPrayForYouButton"

const PageWrapper = styled.div`
  color: var(--primary-color);
  & > * {
    padding-left: 32px;
    padding-right: 32px;
  }
`

const VideoPlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const CallToActionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 72px;
  margin-bottom: 32px;
`

const CallToActionButton = styled.button`
  padding: 8px 16px;
  color: var(--white);
  background-color: var(--primary-color);
  border: none;
  p {
    margin: 0;
  }
  &:hover {
    cursor: pointer;
  }
`

const MayIPrayForYouWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: 32px 0;
`

export default function IndexPage() {
  const t = useTranslations("kingdom-investors")

  const onKingdomInvestorsButtonClick = () => {
    const link = t("call_to_action.button.link")
    window.open(link, "_blank")
  }

  return (
    <PageWrapper>
      <HeroSection />

      <VideoPlayerWrapper style={{ marginTop: "-64px" }}>
        <YouTubeVideoPlayer maxWidth="560px" videoId={t("videos.introduction")} />
      </VideoPlayerWrapper>

      <section>
        <ReactMarkdown>{t("details")}</ReactMarkdown>
      </section>

      <div>
        <hr />
      </div>

      <CallToActionSection>
        <h2 style={{ textAlign: "center" }}>{t("call_to_action.title")}</h2>
        <CallToActionButton type="button" onClick={onKingdomInvestorsButtonClick}>
          <ReactMarkdown>{t("call_to_action.button.text")}</ReactMarkdown>
        </CallToActionButton>
      </CallToActionSection>

      <VideoPlayerWrapper>
        <YouTubeVideoPlayer maxWidth="560px" videoId={t("videos.show_case")} />
      </VideoPlayerWrapper>

      <MayIPrayForYouWrapper>
        <MayIPrayForYouButton textColor="var(--primary-color)" />
      </MayIPrayForYouWrapper>
    </PageWrapper>
  )
}
