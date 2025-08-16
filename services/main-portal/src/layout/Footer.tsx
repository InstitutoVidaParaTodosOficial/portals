import styled from "styled-components"
import { Blinker } from "next/font/google"
import { Colors } from "@/styles/types"

const blinker = Blinker({
  subsets: ["latin"],
  weight: "400",
  style: "normal"
})

const FooterContainer = styled.footer`
  font-family: ${blinker.style.fontFamily};
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
  padding: 8px 16px;

  border-radius: 32px 32px 0 0;
  background-color: var(${Colors.secondaryColor});
  color: var(${Colors.backgroundColor});
`

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: inherit;
`

export default function Footer() {
  return (
    <FooterContainer>
      <Link href="google.com">Politicas de Privacidade</Link>
      <p>|</p>
      <Link>Termos de Uso</Link>
      <p>|</p>
      <p>CNPJ 00.623.904/0001-73</p>
      <p>|</p>
      <p style={{ fontWeight: "bold" }}>IVPT</p>
    </FooterContainer>
  )
}
