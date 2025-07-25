import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

interface CircleDivProps {
  $backgroundImage?: string
}

const CircleDiv = styled.div<CircleDivProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--background-color);
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ $backgroundImage }) =>
    $backgroundImage &&
    `
      background-image: url(${$backgroundImage});
      background-size: cover;
      background-position: center;
    `}
`

type FancyTitleProps = {
  title: string
  imageSrc?: string
  imageAlt?: string
}

export default function FancyTitle({ title, imageSrc, imageAlt }: FancyTitleProps) {
  return (
    <Wrapper>
      <CircleDiv $backgroundImage={imageSrc} aria-label={imageAlt} role={imageSrc ? "img" : undefined} />
      <h2>{title}</h2>
    </Wrapper>
  )
}
