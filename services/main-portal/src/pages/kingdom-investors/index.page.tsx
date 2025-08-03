import styled from "styled-components"
import { useTranslations } from "next-intl"

import HeroSection from "@/pages/kingdom-investors/sections/HeroSection/HeroSection"
import YouTubeVideoPlayer from "@/components/youtube-video-player/YouTubeVideoPlayer"

const VideoPlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -64px;
`

export default function IndexPage() {
  const t = useTranslations("kingdom-investors")

  const videoId = t("videos.introduction")

  return (
    <>
      <HeroSection />

      <VideoPlayerWrapper>
        <YouTubeVideoPlayer videoId={videoId} />
      </VideoPlayerWrapper>
    </>
  )
}
