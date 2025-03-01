import styled from "styled-components"
import { Colors } from "@/styles/types"

type BorderSize = `${string}px`

type StyledComponentProps = {
  $borderSize: BorderSize
  $color: Colors
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Title = styled.h1<StyledComponentProps>`
  margin: 0;
  padding: 16px;
  border: ${props => `${props.$borderSize} solid var(${props.$color})`};
  white-space: nowrap;

  :before {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`

const HorizontalLine = styled.div<StyledComponentProps>`
  height: ${props => props.$borderSize};
  width: 100%;
  background-color: var(${props => `${props.$color}`});
`

type Props = {
  text: string
  borderSize?: BorderSize
  color?: Colors
  style?: React.CSSProperties
}

export default function FancyTitle({ text, borderSize = "2px", style, color = Colors.backgroundColor }: Props) {
  return (
    <Wrapper style={style}>
      <HorizontalLine $color={color} $borderSize={borderSize} />

      <Title $color={color} $borderSize={borderSize}>
        {text}
      </Title>

      <HorizontalLine $color={color} $borderSize={borderSize} />
    </Wrapper>
  )
}
