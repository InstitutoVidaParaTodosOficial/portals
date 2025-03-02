import styled from "styled-components"
import { useTranslations } from "next-intl"
import Image from "next/image"

import { Colors } from "@/styles/types"
import SocialMedia from "@/components/social-medias/SocialMedia"
import FancyTitle from "@/components/FancyTitle"

import BannerBackgroundImage from "./assets/background.png"

const BannerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BannerCallToActionText = styled.span`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bolder;
  color: var(${Colors.primaryColor});
`

const BannerButton = styled.button`
  background-color: var(--secondary-color);
  color: var(--background-color);
  border: 0;
  padding: 10px;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`

const ComponentWrapper = styled.section<{ $backgroundColor: Colors }>`
  background-color: ${props => `var(${props.$backgroundColor})`};
  color: var(--background-color);
  padding: 32px 0;
`

const Row = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
`

const Column = styled.div`
  padding: 0 24px;
`

const VerticalLine = styled.hr`
  margin: 0;
`

type Props = {
  backgroundColor?: Colors
}

export default function ContactUs({ backgroundColor = Colors.primaryColor }: Props) {
  const t = useTranslations("sections.contact")

  return (
    <ComponentWrapper $backgroundColor={backgroundColor}>
      <FancyTitle text={t("headline")} style={{ marginBottom: "32px" }} />

      <Row>
        <Column className="centered-column">
          <BannerWrapper>
            <BannerCallToActionText>{t("pray.call_to_action")}</BannerCallToActionText>
            <Image src={BannerBackgroundImage} alt="Background Image" width={200} height={197} priority />
            <BannerButton type="button">{t("pray.action_button")}</BannerButton>
          </BannerWrapper>
        </Column>

        <VerticalLine />

        <Column className="zero-margin vertical-centered">
          <h3>{t("subtitle")}</h3>
          <p>{t("email")}</p>
          <p>{t("phone")}</p>

          <SocialMedia />

          <h4>{t("address.title")}</h4>
          <p>{t("address.line_1")}</p>
          <p>
            {t("address.city")}, {t("address.state")}
          </p>
          <p>{t("address.country")}</p>
        </Column>
      </Row>
    </ComponentWrapper>
  )
}
