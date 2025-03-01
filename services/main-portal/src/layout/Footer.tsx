import styled from "styled-components"
import Image from "next/image"

import Logo from "./assets/logo.png"

const FooterContainer = styled.footer`
  background-color: var(--background-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`

export default function Footer() {
  return (
    <FooterContainer>
      <Image src={Logo} alt="IVPT Logo" width={200} />
    </FooterContainer>
  )
}
