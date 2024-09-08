import styled from "styled-components"
import Image from "next/image"

import SVGLogoFile from "./assets/logo.svg"

const Container = styled.footer`
  padding: 16px;
  background-color: white;
  display: flex;
  justify-content: end;
`

export default function Footer() {
  return (
    <Container>
      <Image src={SVGLogoFile} alt="Casa de adolescentes logo" width="100" />
    </Container>
  )
}
