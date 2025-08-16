import styled from "styled-components"
import { useTranslations } from "next-intl"

const Wrapper = styled.section`
  background-color: var(--primary-color);
  height: 200px;
  color: white;
  display: flex;
  align-items: end;
  padding: 0 24px 88px 24px;
`

const Title = styled.h1`
  margin: 0;
  border-bottom: 1px solid white;
`

export default function HeroSection() {
  const t = useTranslations("pedro-dong")

  return (
    <Wrapper>
      <Title>{t("title")}</Title>
    </Wrapper>
  )
}
