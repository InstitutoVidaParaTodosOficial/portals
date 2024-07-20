import { MouseEvent } from "react"
import styled from "styled-components"
import { SocialMedia } from "@/types/SocialMedia"

type BorderRadiusPosition = "none" | "left" | "right" | "all"

const SocialMediaList = styled.div<{
  borderRadiusPosition: BorderRadiusPosition | undefined
  radius: string
  backColor: `#${string}`
}>`
  padding: 16px;
  background-color: ${props => props.backColor};
  display: inline-block;
  border-radius: ${props => {
    switch (props.borderRadiusPosition) {
      case "all":
        return props.radius
      case "left":
        return `${props.radius} 0 0 ${props.radius}`
      case "right":
        return `0 ${props.radius} ${props.radius} 0`
      default:
        return null
    }
  }};
`

const SocialIcon = styled.div`
  width: 35px;
  height: 35px;

  &:hover {
    cursor: pointer;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

type SocialMediasListProps = {
  list: SocialMedia[]
  openNewTab?: boolean
  borderRadiusPosition?: BorderRadiusPosition
  radius?: string
  backColor?: `#${string}`
}

export default function SocialMediasList({
  list,
  openNewTab = true,
  borderRadiusPosition,
  radius = "16px",
  backColor = "#fff"
}: SocialMediasListProps) {
  const onClickSocialIcon = (socialMedia: SocialMedia, event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    const target = openNewTab ? "_blank" : "_self"
    window.open(socialMedia.link, target)
  }

  return (
    <SocialMediaList borderRadiusPosition={borderRadiusPosition} radius={radius} backColor={backColor}>
      {list.map(media => (
        <SocialIcon key={media.id} onClick={event => onClickSocialIcon(media, event)}>
          <img alt={`${media.platform} social media`} src={media.iconUrl} />
        </SocialIcon>
      ))}
    </SocialMediaList>
  )
}
