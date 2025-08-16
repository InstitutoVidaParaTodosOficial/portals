import styled from "styled-components"
import Image, { StaticImageData } from "next/image"

const Wrapper = styled.div`
  border: 10px solid var(--light-gray);
  min-width: 375px;
`

type PolaroidPictureProps = {
  imgSrc: string | StaticImageData
  imgAlt: string
}
export default function PolaroidPicture({ imgSrc, imgAlt }: PolaroidPictureProps) {
  return (
    <Wrapper>
      <Image src={imgSrc} alt={imgAlt} style={{ width: "100%", height: "100%" }} />
    </Wrapper>
  )
}
