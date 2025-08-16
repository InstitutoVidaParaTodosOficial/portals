import styled from "styled-components"
import { useTranslations } from "next-intl"
import Image from "next/image"

import PolaroidPicture from "@/components/PolaroidPicture/PolaroidPicture"
import MayIPrayForYouSection from "@/components/sections/MayIPrayForYouSection/MayIPrayForYouSection"

import HeroSection from "@/pages/pedro-dong/sections/HeroSection/HeroSection"

import PedroDong from "./assets/pedro-dong.png"
import DongYuLanImage from "./assets/dong-yu-lan.png"
import ChinaImage from "./assets/china.png"

const Section = styled.section<{ $backgroundColor: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  padding: 32px;
  color: white;
`

const PedroDongSection = styled(Section)`
  display: flex;
  padding-bottom: 0;
  padding-left: 0;
`

const PedroDongImageWrapper = styled.div`
  margin-top: -100px;
`

const ImagesSection = styled.section`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: -110px;
`

const HighlightCard = styled.div`
  margin-top: 32px;
  background-color: var(--secondary-color);
  padding: 16px;
  border-radius: 16px;
  border: 1px solid white;
  text-align: center;

  p {
    margin: 0;
  }
`

export default function PedroDongPage() {
  const t = useTranslations("pedro-dong")

  return (
    <>
      <HeroSection />

      {/*first section*/}
      <PedroDongSection $backgroundColor="var(--secondary-color)">
        <PedroDongImageWrapper>
          <Image src={PedroDong} alt="Pedro Dong" style={{ maxWidth: "350px", height: "auto" }} />
        </PedroDongImageWrapper>
        <div>
          <h1>{t("first_section.headline")}</h1>
          <p>{t("first_section.text")}</p>
        </div>
      </PedroDongSection>

      {/*second section*/}
      <Section $backgroundColor="var(--primary-color)">
        <ImagesSection>
          <PolaroidPicture imgSrc={DongYuLanImage} imgAlt="Dong Yu Lan" />
          <PolaroidPicture imgSrc={ChinaImage} imgAlt="China" />
        </ImagesSection>

        <h2>{t("second_section.headline")}</h2>
        <p>{t("second_section.text")}</p>
      </Section>

      {/*third section*/}
      <Section $backgroundColor="var(--secondary-color)">
        <h2>{t("third_section.headline")}</h2>
        <p>{t("third_section.text")}</p>
      </Section>

      {/*fourth section*/}
      <Section $backgroundColor="var(--primary-color)">
        <p>{t("fourth_section.introduction")}</p>
        <h2>{t("fourth_section.headline")}</h2>
        <p>{t("fourth_section.text")}</p>

        <HighlightCard>
          <p>{t("highlighted")}</p>
        </HighlightCard>

        <MayIPrayForYouSection />
      </Section>
    </>
  )
}
