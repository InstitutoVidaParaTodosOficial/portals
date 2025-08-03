import styled from "styled-components"
import { useTranslations } from "next-intl"
import ReactMarkdown from "react-markdown"

import { Colors } from "@/styles/types"

const HeroSectionWrapper = styled.section`
  background-color: var(${Colors.primaryColor});
  padding: 100px 32px;
  color: var(--white);
  border-radius: 0 0 32px 32px;
`
const Title = styled.h1`
  padding-bottom: 8px;
  border-bottom: 1px solid var(--white);
  display: inline;
`

const SubTitle = styled.h2``

export default function HeroSection() {
  const t = useTranslations("kingdom-investors")
  return (
    <HeroSectionWrapper>
      <Title>{t("title")}</Title>
      <SubTitle>{t("subtitle")}</SubTitle>

      <ReactMarkdown>{t("description")}</ReactMarkdown>
    </HeroSectionWrapper>
  )
}
