import styled from "styled-components"
import Image from "next/image"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const CircleDiv = styled.div<{ $backgroundColor: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border: 1px solid white;
`

type FancyTitleProps = {
  title: string
  imageSrc?: string
  imageAlt?: string
  logoBackgroundColor?: string
}

export default function FancyTitle({
  logoBackgroundColor = "var(--background-color)",
  title,
  imageSrc,
  imageAlt
}: FancyTitleProps) {
  return (
    <Wrapper>
      {imageSrc && (
        <CircleDiv $backgroundColor={logoBackgroundColor}>
          <Image
            src={imageSrc}
            alt={imageAlt || ""}
            width={50}
            height={50}
            style={{ objectFit: "cover", borderRadius: "50%" }}
            sizes="50px"
            priority
          />
        </CircleDiv>
      )}
      <h2>{title}</h2>
    </Wrapper>
  )
}
