import styled from "styled-components"
import { Just_Me_Again_Down_Here } from "next/font/google"
import { Abril_Fatface } from "next/font/google"
import { Anaheim } from "next/font/google"
import { News } from "./NextNews"

// Fonts
const justMeAgainDownHere = Just_Me_Again_Down_Here({
  subsets: ["latin"],
  weight: "400"
})

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: "400"
})

const anaheim = Anaheim({
  subsets: ["latin"],
  weight: "400"
})

const SectionWrapper = styled.section`
  background-color: #02b9d7;
  position: relative;
  margin: 0;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin: 0 auto auto 80px;
  padding: 20px;

  @media (max-width: 768px) {
    margin: 0;
    padding: 20px 0 0 20px;
  }
`

const Title = styled.h2`
  color: #fff;
  margin: 0;
  font-size: 64px;
  font-weight: 400;
  white-space: nowrap;
  transform: rotate(-0.8deg);

  @media (max-width: 768px) {
    font-size: 48px;
  }
`

const TitleLine = styled.div`
  flex-grow: 1;
  height: 3px;
  background-color: white;
  border-radius: 10px;
`

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0 auto auto 60px;
  padding: 20px;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
  }
`

const NewsCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: 100%;
    padding: 0;
  }
`

const NewsImage = styled.img`
  width: 299px;
  height: 252px;
  object-fit: cover;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 85%;
    align-self: flex-start;
    margin: 0 0 10px 0;
  }
`

const NewsContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const NewsTitle = styled.h3`
  font-family: ${abrilFatface.style.fontFamily};
  font-size: 36px;
  line-height: 1.25;
  color: #ffffff;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 35px;
    -webkit-line-clamp: 3;
    width: 90%;
  }
`

const NewsDescription = styled.p`
  font-family: ${anaheim.style.fontFamily};
  font-size: 24px;
  line-height: 25px;
  color: #ffffff;
  margin: 0;
  max-width: 534px;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 16px;
    width: 80%;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const NewsButton = styled.a`
  font-family: ${anaheim.style.fontFamily};
  text-decoration: none;
  background: #f39324;
  color: white;
  padding: 8px 12px;
  font-size: 14px;
  text-align: center;
  max-width: 180px;
  max-height: 35px;

  @media (max-width: 768px) {
    text-align: center;
    max-width: 112px;
    max-height: 22px;
  }
`

const MOCK_NEXT_EVENTS: News[] = [
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

export default function NewsFeedSection() {
  return (
    <SectionWrapper>
      <TitleContainer>
        <Title className={justMeAgainDownHere.className}> Fique por dentro!</Title>
        <TitleLine />
      </TitleContainer>

      <NewsContainer>
        {MOCK_NEXT_EVENTS.map(news => (
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
//To be implemented: the way that the image is managed
