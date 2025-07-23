import styled from "styled-components"

const Wrapper = styled.div``

type FancyTitleProps = {
  title: string
}

export default function FancyTitle({ title }: FancyTitleProps) {
  return (
    <Wrapper>
      <h2>{title}</h2>
    </Wrapper>
  )
}
