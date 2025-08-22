import styled from "styled-components"
import CircleLogo from "@/components/circle-logo/CircleLogo"

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0;
  width: 100%;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--light-gray);
  }
`

type HorizontalLineProps = {
  logoSize: number
}

export default function HorizontalLine({ logoSize = 90 }: HorizontalLineProps) {
  return (
    <Container>
      <CircleLogo size={logoSize} />
    </Container>
  )
}
