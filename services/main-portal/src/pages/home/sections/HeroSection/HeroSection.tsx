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
  width: 10vw;              // ~10% da largura da tela
  height: 20vh;             // ~20% da altura da tela
  position: absolute;
  top: 30vh;                // ~10% da altura da tela
  right: -4vw;               // ~60% da largura da tela
  border-radius: 2vw; 
  background-color: #082D50; /* opcional, apenas para visualização */
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
