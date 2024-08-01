import styled from "styled-components"

import { Just_Me_Again_Down_Here, Abril_Fatface } from "next/font/google"
import SocialMediasList from "@/components/SocialMediaList/SocialMedia"
import { SocialMedia } from "@/types/SocialMedia"
import PhoneFrameVideoPlayer from "@/components/PhoneFrameVideoPlayer/PhoneFrameVideoPlayer"

const justMeAgainDownHere = Just_Me_Again_Down_Here({
  subsets: ["latin"],
  weight: "400"
})

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: "400"
})

const FirstSectionWrapper = styled.section`
  background-color: red;
  padding: 125px 0 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeadLine = styled.h1`
  font-size: 96px;
  line-height: 47px;
  position: relative;
  margin: 0;
`

const StyledSpan = styled.span`
  color: #f39324;
  position: absolute;
  transform: rotate(-9.5deg);
  left: 50px;
`

const BibleVerseWrapper = styled.div`
  color: #f39324;
  border-left: 2px solid;
  padding-left: 10px;
  max-width: 400px;
`

const socialMediaItems: SocialMedia[] = [
  {
    id: "1",
    link: "https://google.com",
    platform: "instagram",
    iconUrl: "/assets/icons/instagram.svg"
  },
  {
    id: "2",
    link: "mailto:test@gmail.com",
    platform: "email",
    iconUrl: "/assets/icons/email.svg"
  },
  {
    id: "3",
    link: "https://google.com",
    platform: "youtube",
    iconUrl: "/assets/icons/youtube.svg"
  }
]

export default function FirstSection() {
  return (
    <FirstSectionWrapper>
      <div>
        <HeadLine className={abrilFatface.className}>
          Gotas
          <br />
          <StyledSpan className={justMeAgainDownHere.className}>de</StyledSpan>
          <br />
          Orvalho
        </HeadLine>

        <BibleVerseWrapper className={justMeAgainDownHere.className}>
          <h2 style={{ fontSize: "40px" }}>Salmos 110:3</h2>
          <p style={{ fontSize: "24px" }}>
            Apresentar-se-á voluntariamente o teu povo, no dia do teu poder; com santos ornamentos, como o orvalho
            emergindo da aurora, serão os teus jovens.
          </p>
        </BibleVerseWrapper>
      </div>

      <PhoneFrameVideoPlayer videoUrl="https://wpcoder.co.uk/links/mixkit-man-holding-neon-light-1238-large.mp4" />

      <SocialMediasList list={socialMediaItems} borderRadiusPosition="left" />
    </FirstSectionWrapper>
  )
}
