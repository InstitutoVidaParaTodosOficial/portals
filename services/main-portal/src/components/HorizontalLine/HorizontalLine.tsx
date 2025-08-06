import styled from "styled-components"
import { Colors } from "@/styles/types"
import CircleLogo from "@/components/circle-logo/CircleLogo"

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  position: relative;
  margin: 32px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Line = styled.hr`
  width: 100vw;
  border: none;
  border-top: 1px solid var(${Colors.lightGray});
  margin-left: -25vw;
  margin-right: -25vw;
`

export default function HorizontalLine() {
  return (
    <Container>
      <Line />
      <CircleLogo />
    </Container>
  )
}
