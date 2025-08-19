import { useRouter } from "next/router"
import styled from "styled-components"
import { useTranslations } from "next-intl"
import { Colors } from "@/styles/types"

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
  padding: 8px 16px;

  margin-top: -20px;
  border-radius: 24px 24px 0 0;
  background-color: var(${Colors.secondaryColor});
  color: var(${Colors.backgroundColor});
`

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: inherit;
`

export default function Footer() {
  const router = useRouter()
  const t = useTranslations("footer")

  return (
    <FooterContainer>
      <Link onClick={() => router.push("/")}>{t("privacy")}</Link>
      <p>|</p>
      <Link onClick={() => router.push("/")}>{t("terms")}</Link>
      <p>|</p>
      <p>CNPJ 00.623.904/0001-73</p>
      <p>|</p>
      <p style={{ fontWeight: "bold" }}>IVPT</p>
    </FooterContainer>
  )
}
