import styled from "styled-components"
import { Just_Me_Again_Down_Here } from "next/font/google"
import { Abril_Fatface } from "next/font/google";
import { Anaheim } from "next/font/google"
import {NextNews} from "@/types/NextNews"

const justMeAgainDownHere = Just_Me_Again_Down_Here({
    subsets: ["latin"],
    weight: "400"
  })

const abrilFatface = Abril_Fatface({
    subsets: ["latin"],
    weight: "400",
  });

const anaheim = Anaheim({
    subsets: ["latin"],
    weight: "400",
  })


const SectionWrapper = styled.section`
  background-color: #02B9D7;
  position: relative;
  margin: 0;
  width: 100vw; /* Ocupa toda a largura da viewport */
  overflow-x: hidden;
  margin-left:60px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-left: 0;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center; /* Alinha verticalmente */
  justify-content: center; /* Centraliza horizontalmente */
  gap: 20px; /* Espaço entre o título e a linha */
  width: 100%; /* Ocupa toda a largura */
  margin: 0 auto; /* Centraliza horizontalmente */
  padding: 20px; /* Espaçamento interno */
`

const Title = styled.h2`
  color: #fff;
  margin: 0 ;
  font-size: 64px;
  font-weight: 400;
  white-space: nowrap;
  transform:rotate(-0.8deg);
`

const TitleLine = styled.div`
  flex-grow: 1; /* Faz a linha ocupar o espaço restante */
  height: 3px; /* Espessura da linha */
  background-color: white; /* Cor da linha */
  border-radius: 10px; /* Borda arredondada */
`
const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0 auto;
  padding: 20px;
`

const NewsCard = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Empilha os elementos no celular */
    align-items: center; /* Centraliza os elementos */
    text-align: center; /* Alinha os textos ao centro */
  }
`

const NewsImage = styled.img`
  width: 299px;
  height: 252px;
  object-fit: cover;
  margin-right: 33px;

  @media (max-width: 768px) {
    max-width: 319px;
    max-height: 219px;
    margin-right: 0; 
  }
`

const NewsContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    align-items: center; /* Centraliza o conteúdo */
    text-align: center; /* Alinha o texto */
    gap: 10px
  }
`

const NewsTitle = styled.h3`
  font-family: ${abrilFatface.style.fontFamily};
  font-size: 36px;
  max-width: 385px;
  max-height: 87px;
  line-height: 36px;
  color: #FFFFFF;
  margin: 0;

  @media (max-width: 768px) {
    text-align: left;
    max-width: 349px;
    max-height: 97px;
  }
`

const NewsDescription = styled.p`
  font-family: ${anaheim.style.fontFamily};
  font-size: 24px;
  max-width: 534px;
  max-height: 113px;
  line-height: 25px;
  color: #FFFFFF;
  margin: 0;

  @media (max-width: 768px) {
    text-align: left;
    max-width: 269px;
    max-height: 113px;
  }
`

const NewsButton = styled.a`
  text-decoration: none;
  background: #F39324;
  color: white;
  padding: 8px 12px;
  font-size: 14px;
  text-align: center;
  max-width: 180px;
  max-height: 35px;

  @media (max-width: 768px) {
    text-align: left;
    max-width: 112px;
    max-height: 22px;
  }
`

const MOCK_NEXT_EVENTS: NextNews[] = [
  {
    id: "1",
    title: "Inauguração da Casa de Adolescentes em MG",
    image: "/image-14.png",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.`,
    link: "https://google.com"
  },
  {
    id: "2",
    title: "Inauguração da Casa de Adolescentes em MG",
    image: "/image-14.png",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.`,
    link: "https://google.com"
  },
  {
    id: "3",
    title: "Inauguração da Casa de Adolescentes em MG",
    image: "/image-14.png",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.`,
    link: "https://google.com"
  }
]

export default function StayUpSection() {
    return (
      <SectionWrapper>
        <TitleContainer>
          <Title className={justMeAgainDownHere.className}> Fique por dentro!</Title>
          <TitleLine />
        </TitleContainer>

        <NewsContainer>
        {MOCK_NEXT_EVENTS.map((news) => (
          <NewsCard key={news.id}>
            <NewsImage src={news.image} alt={news.title} />
            <NewsContent>
              <NewsTitle>{news.title}</NewsTitle>
              <NewsDescription>{news.description}</NewsDescription>
              <NewsButton href={news.link}>Saiba mais</NewsButton>
            </NewsContent>
          </NewsCard>
        ))}
      </NewsContainer>

      </SectionWrapper>
    )
  }