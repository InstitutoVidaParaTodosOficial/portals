import styled from "styled-components"
import Image from "next/image"
import BackgroundPng from "./assets/background.png"
import Card from "@/pages/home/sections/MissionVisionValueSection/Card"

const SectionWrapper = styled.section`
  width: 100%;
  //height: 500px;
  position: relative;
`

const BackgroundImage = styled(Image)`
  z-index: 0;
  width: 100%;
  height: auto;
`

const Container = styled.div`
  position: absolute;
  z-index: 9999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 16px;
  max-width: 100%;
  overflow-x: auto;
  white-space: nowrap;
`

type CardContent = {
  title: string
  content: string
}

const cards: CardContent[] = [
  {
    title: "Valores",
    content:
      "Simplicidade (2Co 11:3); Obediência (Hb 5:8-9); Submissão (1Pe 2:18-21); Humildade (Fp 2:8); Unidade (Jo 17:23); Unanimidade (Fp 2:2); Companheirismo (Ap 1:9); Cumplicidade"
  },
  {
    title: "Sobre Nós",
    content:
      "Nossa missão é acolher e formar adolescentes que amem a Palavra de Deus, cooperem com a Sua obra e influenciem positivamente suas famílias e, consequentemente, a sociedade."
  },
  {
    title: "Visão",
    content:
      "Tornar referência de um ambiente cristão saudável que cuida, santifica e aperfeiçoa os adolescentes sob o ponto de vista humano, espiritual e social; preparando-os para o serviço na igreja em suas cidades e/ou para o chamado missionário."
  }
]

export default function MissionVisionValueSection() {
  return (
    <SectionWrapper>
      <BackgroundImage
        src={BackgroundPng}
        alt="Background iamge with Happy People"
        priority={true}
        quality={100}
        style={{
          objectFit: "cover"
        }}
      />

      <Container>
        {cards.map((card, index) => (
          <Card title={card.title} content={card.content} key={index} />
        ))}
      </Container>
    </SectionWrapper>
  )
}
