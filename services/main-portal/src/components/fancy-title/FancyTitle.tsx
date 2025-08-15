import styled from "styled-components"
import Image from "next/image"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const CircleDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--background-color);
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`

type FancyTitleProps = {
  title: string
  imageSrc?: string
  imageAlt?: string
}

export default function FancyTitle({ title, imageSrc, imageAlt }: FancyTitleProps) {
  return (
    <Wrapper>
      {imageSrc && (
        <CircleDiv>
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
