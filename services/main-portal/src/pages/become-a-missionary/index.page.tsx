import styled from "styled-components"
import { useTranslations } from "next-intl"

import HeroSection from "@/pages/become-a-missionary/sections/HeroSection/HeroSection"
import CircleLogo from "@/components/circle-logo/CircleLogo"

import WhatsAppImage from "@/pages/become-a-missionary/assets/whatsapp.png"
import Image from "next/image"

const CircleLogoWrapper = styled.div`
  border: 16px solid var(--primary-color);
  border-radius: 50%;
  margin-top: -100px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Section = styled.section`
  background-color: var(--primary-color);
  padding: 100px 32px;
  color: white;
  text-align: center;

  h2 {
    margin: 0 0 64px 0;
  }
`

const WhatsAppButton = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 22px;
  justify-content: space-between;
  padding-left: 16px;
  max-width: 500px;
  margin: 0 auto;

  &:hover {
    cursor: pointer;
  }

  span {
    margin-right: 16px;
  }

  div {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #25d366;
  }

  img {
    max-width: 42px;
    padding: 8px 16px;
  }
`

export default function HomePage() {
  const t = useTranslations("become-a-missionary")

  const callToActionOnClick = () => {
    const phoneNumber = t("call_to_action.whatsapp")
    window.open(`https://wa.me/${phoneNumber}`, "_blank")
  }

  return (
    <>
      <HeroSection />

      <Section>
        <CircleLogoWrapper>
          <CircleLogo />
        </CircleLogoWrapper>

        <h2>{t("call_to_action.title")}</h2>

        <WhatsAppButton onClick={callToActionOnClick}>
          {t("call_to_action.action")}

          <div>
            <Image src={WhatsAppImage} style={{ width: 60, height: 50 }} alt="WhatsApp icon" />
          </div>
        </WhatsAppButton>
      </Section>
    </>
  )
}
