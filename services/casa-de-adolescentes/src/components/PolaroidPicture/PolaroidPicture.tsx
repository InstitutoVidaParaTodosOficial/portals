import styled from "styled-components"
import Image, { StaticImageData } from "next/image"

import GreyStickerImage from "./assets/grey-sticky-tape.png"

const PolaroidPictureWrapper = styled.div<{
  $maxWidth: `${string}px`
}>`
  max-width: ${props => props.$maxWidth};
  position: relative;
`

const ContentWrapper = styled.div`
  padding: 30px 30px 72px 30px;
  background-color: #cfcfcf;
`

const GreySticker = styled(Image)<{
  $imageWidth: number
}>`
  position: absolute;
  z-index: 999999999;
  left: ${props => `${props.$imageWidth / 4}px`};
  top: -20px;
`

type PolaroidPictureProps = {
  imageUrl: string | StaticImageData
  imageDescription: string
  imageWidth?: number
  maxWidth?: `${string}px`
}

export default function PolaroidPicture({ imageUrl, imageDescription, imageWidth = 400 }: PolaroidPictureProps) {
  return (
    <PolaroidPictureWrapper $maxWidth={`${imageWidth}px`}>
      <GreySticker $imageWidth={imageWidth} src={GreyStickerImage} alt="Grey Sticker" width={imageWidth / 2} />

      <ContentWrapper>
        <Image
          src={imageUrl}
          alt={imageDescription}
          width={imageWidth}
          height="0"
          style={{ width: "100%", height: "auto" }}
        />
      </ContentWrapper>
    </PolaroidPictureWrapper>
  )
}
