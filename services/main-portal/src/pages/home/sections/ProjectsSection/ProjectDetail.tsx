import styled from "styled-components"

import FancyTitle from "@/components/fancy-title/FancyTitle"
import Carousel from "@/components/carousel/Carousel"

type ProjectDetailProps = {
  title: string
  paragraphs: string[]
  imagesUrls?: string[]
}

type ImageWrapperProps = {
  url: string
}
const ImageWrapper = styled.div<ImageWrapperProps>`
  width: 200px;
  height: 150px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
`

export default function ProjectDetail({ title, paragraphs, imagesUrls }: ProjectDetailProps) {
  return (
    <>
      <FancyTitle title={title} />

      {paragraphs.map((content, index) => (
        <p key={index}>{content}</p>
      ))}

      {imagesUrls && imagesUrls.length > 0 && (
        <Carousel>
          {imagesUrls.map((url, index) => (
            <ImageWrapper url={url} key={index} />
          ))}
        </Carousel>
      )}
    </>
  )
}
