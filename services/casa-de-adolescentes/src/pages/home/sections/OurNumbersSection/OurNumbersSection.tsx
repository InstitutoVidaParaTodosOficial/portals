import styled from "styled-components"
import Image from "next/image"

import WorldImageFile from "./assets/world.png"
import { Abril_Fatface, Anaheim } from "next/font/google"

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: "400"
})

const anaheim = Anaheim({
  subsets: ["latin"],
  weight: "400"
})

const Container = styled.section`
  display: flex;
  align-items: center;
  background-color: #eb529c;
`

const WorldImage = styled(Image)``

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

const TextNumbers = styled.div`
  color: white;
  padding: 16px;
  font-size: 36px;
  border-left: 2px solid white;
`
const TextDescription = styled.div`
  color: white;
  padding: 20px;
  font-size: 24px;
  border-left: 2px solid white;
  line-height: 1;
`

export default function OurNumbersSection() {
  return (
    <Container>
      <WorldImage src={WorldImageFile} alt="Earth image" />

      <TextWrapper>
        <TextNumbers>
          <h2 style={{ lineHeight: "0.5" }} className={abrilFatface.className}>
            498 CASAS
          </h2>
          <h2 style={{ lineHeight: "0.5" }} className={abrilFatface.className}>
            24 PAÍSES
          </h2>
        </TextNumbers>

        <TextDescription>
          <p className={anaheim.className}>
            As igrejas em todos os continentes que acompanham de perto a palavra profética, estão tendo as mesmas
            práticas, seguindo a mesma direção e vivendo a mesma aegria. Isso é obra do Espírito! (Fp 3:17; 2Co 12:38).
          </p>
        </TextDescription>
      </TextWrapper>
    </Container>
  )
}
