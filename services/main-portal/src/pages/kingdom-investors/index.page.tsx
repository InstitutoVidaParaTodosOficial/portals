import styled from "styled-components"
import { useTranslations } from "next-intl"
import ReactMarkdown from "react-markdown"

import HeroSection from "@/pages/kingdom-investors/sections/HeroSection/HeroSection"
import YouTubeVideoPlayer from "@/components/youtube-video-player/YouTubeVideoPlayer"

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

export default function IndexPage() {
  const t = useTranslations("kingdom-investors")

  return (
    <PageWrapper>
      <HeroSection />

      <VideoPlayerWrapper style={{ marginTop: "-64px" }}>
        <YouTubeVideoPlayer videoId={t("videos.introduction")} />
      </VideoPlayerWrapper>

      <section>
        <ReactMarkdown>{t("details")}</ReactMarkdown>
      </section>

      <div>
        <hr />
      </div>

      <CallToActionSection>
        <h2 style={{ textAlign: "center" }}>{t("call_to_action.title")}</h2>
        <CallToActionButton type="button">
          <ReactMarkdown>{t("call_to_action.button")}</ReactMarkdown>
        </CallToActionButton>
      </CallToActionSection>

      <VideoPlayerWrapper>
        <YouTubeVideoPlayer videoId={t("videos.show_case")} />
      </VideoPlayerWrapper>
    </PageWrapper>
  )
}
