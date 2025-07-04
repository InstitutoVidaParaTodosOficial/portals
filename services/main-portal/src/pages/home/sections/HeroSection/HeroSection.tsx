import Image from "next/image"

import SocialMedia from "@/components/social-medias/SocialMedia"
import styled from "styled-components"

import BackgroundImageFile from "./assets/backgroud.png"

const BackgroundImage = styled(Image)`
  z-index: 0;
  width: 100%;
  height: auto;
`

const SocialMediaContainer = styled.div`
  width: 10vw; 
  height: 20vh; 
  position: absolute;
  top: 30vh; 
  right: -4vw; 
  border-radius: 2vw;
  background-color: #082d50; 
`

export default function HomePage() {
  return (
    <>
      <BackgroundImage src={BackgroundImageFile} alt="background image" />

      <SocialMediaContainer>
        <SocialMedia></SocialMedia>
      </SocialMediaContainer>
    </>
  )
}
