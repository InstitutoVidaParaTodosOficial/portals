import styled from "styled-components"
import { ReactNode } from "react"

const Wrapper = styled.div<{ $maxWidth: `${number}px` }>`
  padding: 32px;
  background: #ffffff;
  border-radius: 32px;
  max-width: ${props => props.$maxWidth};
`

const CardHeader = styled.div``

const CardBody = styled.div``

type ClickableCardProps = {
  onClick: () => void
  header: ReactNode
  body: ReactNode
  maxWidth?: `${number}px`
}

export default function ClickableCard({ onClick, header, body, maxWidth = `500px` }: ClickableCardProps) {
  return (
    <Wrapper onClick={onClick} $maxWidth={maxWidth}>
      <CardHeader>{header}</CardHeader>
      <CardBody>{body}</CardBody>
    </Wrapper>
  )
}
