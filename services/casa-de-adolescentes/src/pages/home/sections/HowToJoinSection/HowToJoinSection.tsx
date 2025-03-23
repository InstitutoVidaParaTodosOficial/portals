import styled from "styled-components"
import { Just_Me_Again_Down_Here, Anaheim } from "next/font/google"
import StickyNote from "@/components/StickyNote/StickyNote"
import Image from "next/image"
import PolaroidPicture from "@/components/PolaroidPicture/PolaroidPicture"
import ClickableCard from "@/components/ClickableCard/ClickableCard"

import VemEVeImage from "./assets/vemeve.svg"
import AdolescentesImage from "./assets/adolescentes.png"
import PeopleHoldingBookImage from "./assets/holding-book.png"
import Image13 from "./assets/image-13.png"
import Image12 from "./assets/image-12.png"

const justMeAgainDownHere = Just_Me_Again_Down_Here({
  subsets: ["latin"],
  weight: "400"
})

const anaheim = Anaheim({
  subsets: ["latin"],
  weight: "400"
})

const Wrapper = styled.section`
  background-color: #0a0b2f;
  box-sizing: border-box;
  position: relative;
`

const SectionTitle = styled.h2`
  margin: 0;
  color: #f39324;
  text-align: center;
`

const StepsSection = styled.div`
  padding: 0 10%;
  margin-bottom: 32px;
`

const StepWrapper = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
`

const Number = styled.div`
  color: #f39324;
  font-size: 64px;
  margin-right: 32px;
`

const StickyNoteContainer = styled.div<{ marginTop: number , marginLeft: number}>`
  display: flex;
  justify-content: center;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-top: ${({ marginTop }) => marginTop}px;
`

const ClickableCardContainer = styled.div`
  position: absolute;
  margin-top: 230px;
  margin-left: 350px;
  justify-content: center;
`

const PolaroidContainer = styled.div<{ rotate: number, marginTop: number, marginLeft: number }>`
  justify-content: center;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-top: ${({ marginTop }) => marginTop}px;
  rotate: ${({ rotate }) => rotate}deg;
`

export default function HowToJoinSection() {
  return (
    <Wrapper>
      <SectionTitle className={justMeAgainDownHere.className}>Como Fazer Parte?</SectionTitle>

      <StepsSection>
        <StepWrapper>
          <Number className={justMeAgainDownHere.className}>1.</Number>
          <span className={anaheim.className}>
            Se você teve o coração de participar, não espere amanhã! Preencha agora o formulário para ter experiências
            sobrenaturais com o Senhor! Sua vida nunca mais será a mesma!
          </span>
        </StepWrapper>
        <StepWrapper>
          <Number className={justMeAgainDownHere.className}>2.</Number>
          <span className={anaheim.className}>
            Clique no link e insira suas informações, em breve um capitão entrará em contato para passar detalhes sobre
            a Casa de Adolescentes mais próxima.
          </span>
        </StepWrapper>
        <StepWrapper>
          <Number className={justMeAgainDownHere.className}>3.</Number>
          <span className={anaheim.className}>Tem uma galera esperando! Só falta você! Vem e vê !</span>
        </StepWrapper>
      </StepsSection>

      <StickyNoteContainer marginTop={50} marginLeft={10}>
        <StickyNote rotate={-5} maxWidth={"600px"}>
          <Image src={VemEVeImage} alt="Vem E Ve image" />
        </StickyNote>
      </StickyNoteContainer>

      <PolaroidContainer marginLeft={820} marginTop={-20} rotate={13}>
        <PolaroidPicture imageUrl={AdolescentesImage} imageDescription="Adolescentes"/>
      </PolaroidContainer>

      <StickyNoteContainer marginTop={-330} marginLeft={-250}>
        <StickyNote rotate={-5} maxWidth="400px">
          <p
            style={{
              ...justMeAgainDownHere.style,
              color: "#0A0B2F",
              fontSize: "22px"
            }}
          >
            “Vem e vê” é mais do que um convite; é uma experiência transformadora. Nesse convite, há uma promessa de
            descoberta, de encontro, de conexão. É um convite para testemunhar o que Deus está fazendo em nossas vidas e
            nas vidas daqueles ao nosso redor. É um chamado para experimentar o amor, a graça e o poder de Deus de
            primeira mão. Então, o que você está esperando? Vem e vê por si mesmo!
          </p>
        </StickyNote>
      </StickyNoteContainer>
      
      <ClickableCardContainer>
        <ClickableCard
          onClick={() => {}}
          header={<Image src={Image13} alt="Card Header" />}
          body={<Image src={Image12} alt="Card Body" />}
        />
      </ClickableCardContainer>

      <PolaroidContainer marginLeft={850} marginTop={10} rotate={13}>
        <PolaroidPicture imageUrl={PeopleHoldingBookImage} imageDescription="Pessoas segurando livro" />
      </PolaroidContainer>

    </Wrapper>
  )
}
