import styled from "styled-components"
import { Just_Me_Again_Down_Here, Anaheim } from "next/font/google"
import StickyNote from "@/components/StickyNote/StickyNote"
import Image from "next/image"
import PolaroidPicture from "@/components/PolaroidPicture/PolaroidPicture"
import ClickableCard from "@/components/ClickableCard/ClickableCard"

import AdolescentesImage from "./assets/adolescentes.png"
import PeopleHoldingBookImage from "./assets/holding-book.png"
import Image13 from "./assets/image-13.png"
import Image12 from "./assets/image-12.png"
import Arrow from "./assets/arrow.svg"
import Stars from "./assets/stars.webp"
import VemeVe from "./assets/vemeve.webp"
import Play from "./assets/play.svg"

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
  position: relative;
  padding-top: 100px;
  z-index: 0;
`

const SectionTitle = styled.h2`
  margin: 0;
  color: #f39324;
  text-align: center;
  margin-bottom: 8rem;
  font-size: 6rem;
`

const StepText = styled.span`
  font-size: 1.5rem;
  line-height: 1.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 39.75rem;
`

const StepsSection = styled.div`
  padding: 0 10%;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const StepWrapper = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
`

const Number = styled.div`
  color: #f39324;
  font-size: 6rem;
  line-height: 6rem;
  margin-right: 32px;
  width: 3.25rem;
`

const ClickableCardContainer = styled.div`
  position: absolute;
  margin-top: 230px;
  margin-left: 350px;
  justify-content: center;
`

const PolaroidContainer = styled.div<{ rotate?: number }>`
  display: flex;
  align-self: center;
  ${({ rotate }) => `transform: rotate(${rotate}deg);`}
  justify-content: center;
  rotate: ${({ rotate }) => rotate}deg; */
`

const FinalSection = styled.div`
  background-color: #02b9d7;
  box-sizing: border-box;
  position: relative;
`

const StyledArrow = styled(Image)`
  position: absolute;
  top: -145px;
  left: 94px;
  z-index: 1;
`

const StyledStars = styled(Image)`
  position: absolute;
  top: -42px;
  right: -128px;
  z-index: -1;
`

const StickyNoteContainer = styled.div`
  position: relative;
  display: flex;
  align-self: center;
`

const VemEVeImageStyle = styled(Image)`
  position: absolute;
  top: 50%;
  z-index: 1;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`

const StickyNoteTrail = styled.div`
  display: flex;
  flex-direction: column;
`

const PolaroidVideo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 54px;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
`

const PolaroidVideoContainer = styled.div`
  max-width: 836px;
  width: 100%;
  height: 445px;
  align-self: center;
`

export default function HowToJoinSection() {
  return (
    <Wrapper className={anaheim.className}>
      <StyledStars src={Stars} alt="" height={634} width={634} />

      <StyledArrow src={Arrow} alt="" height={342} width={129} />

      <SectionTitle className={justMeAgainDownHere.className}>Como Fazer Parte?</SectionTitle>

      <StepsSection>
        <StepWrapper>
          <Number className={justMeAgainDownHere.className}>1.</Number>
          <StepText className={anaheim.className}>
            Se você teve o coração de participar, não espere amanhã! Preencha agora o formulário para ter experiências
            sobrenaturais com o Senhor! Sua vida nunca mais será a mesma!
          </StepText>
        </StepWrapper>
        <StepWrapper>
          <Number className={justMeAgainDownHere.className}>2.</Number>
          <StepText className={anaheim.className}>
            Clique no link e insira suas informações, em breve um capitão entrará em contato para passar detalhes sobre
            a Casa de Adolescentes mais próxima.
          </StepText>
        </StepWrapper>
        <StepWrapper>
          <Number className={justMeAgainDownHere.className}>3.</Number>
          <StepText className={anaheim.className}>Tem uma galera esperando! Só falta você! Vem e vê !</StepText>
        </StepWrapper>
      </StepsSection>

      <StickyNoteTrail>
        <StickyNoteContainer>
          <VemEVeImageStyle src={VemeVe} alt="Vem E Ve image" height={329} width={332} />
          <StickyNote rotate={-7.45} width="400px" height="400px" maxWidth="400px"></StickyNote>
        </StickyNoteContainer>
        <PolaroidContainer rotate={9.87}>
          <PolaroidPicture imageUrl={AdolescentesImage} imageDescription="Adolescentes" />
        </PolaroidContainer>
        <StickyNoteContainer>
          <StickyNote rotate={-7.45} maxWidth="400px">
            <p
              style={{
                ...justMeAgainDownHere.style,
                color: "#0A0B2F",
                fontSize: "22px"
              }}
            >
              “Vem e vê” é mais do que um convite; é uma experiência transformadora. Nesse convite, há uma promessa de
              descoberta, de encontro, de conexão. É um convite para testemunhar o que Deus está fazendo em nossas vidas
              e nas vidas daqueles ao nosso redor. É um chamado para experimentar o amor, a graça e o poder de Deus de
              primeira mão. Então, o que você está esperando? Vem e vê por si mesmo!
            </p>
          </StickyNote>
        </StickyNoteContainer>
        <PolaroidVideoContainer>
          <PolaroidVideo>
            <Image src={Play} alt="" width={174} height={174} />
          </PolaroidVideo>
        </PolaroidVideoContainer>
      </StickyNoteTrail>

      <FinalSection>
        <PolaroidContainer rotate={13}>
          <PolaroidPicture imageUrl={PeopleHoldingBookImage} imageDescription="Pessoas segurando livro" />
        </PolaroidContainer>

        <ClickableCardContainer>
          <ClickableCard
            onClick={() => {}}
            header={<Image src={Image13} alt="Card Header" />}
            body={<Image src={Image12} alt="Card Body" />}
          />
        </ClickableCardContainer>
      </FinalSection>
    </Wrapper>
  )
}
