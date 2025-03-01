import styled from "styled-components"
import { useTranslations } from "next-intl"

import { Colors } from "@/styles/types"
import SocialMedia from "@/components/social-medias/SocialMedia"
import FancyTitle from "@/components/FancyTitle"

const ComponentWrapper = styled.section<{ $backgroundColor: Colors }>`
  background-color: ${props => `var(${props.$backgroundColor})`};
  color: var(--background-color);
  padding: 32px 0;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`

const Column = styled.div`
  padding: 24px;
`

type Props = {
  backgroundColor?: Colors
}

export default function ContactUs({ backgroundColor = Colors.primaryColor }: Props) {
  const t = useTranslations("sections.contact")

  return (
    <ComponentWrapper $backgroundColor={backgroundColor}>
      <FancyTitle text={t("headline")} />

      <Row>
        <Column>
          {t("pray.call_to_action")}

          <button type="button">{t("pray.action_button")}</button>
        </Column>

        <Column>
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
