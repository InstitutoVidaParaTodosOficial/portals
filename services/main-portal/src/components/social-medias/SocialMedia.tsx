import React from "react"
import styled from "styled-components"
import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa"

type BorderRadiusPosition = "none" | "left" | "right" | "all"

const SocialMediaList = styled.div<{
  $borderRadiusPosition: BorderRadiusPosition | undefined
  radius: string
  $backgroundColor: `#${string}`
}>`
  padding: 16px;
  background-color: ${props => props.$backgroundColor};
  display: inline-block;
  border-radius: ${props => {
    switch (props.$borderRadiusPosition) {
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
  height: 120px;

  &:hover {
    cursor: pointer;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

const IconLink = styled.a`
  color: var(--background-color);
  font-size: 35px;
  text-decoration: none;

  &:hover {
    color: var(--accent-color);
  }
`

type SocialMediasListProps = {
  borderRadiusPosition?: BorderRadiusPosition
  radius?: string
  backColor?: `#${string}`
}

export default function SocialMedia({
  borderRadiusPosition,
  radius = "15px",
  backColor = "#082D50"
}: SocialMediasListProps) {
  return (
    <SocialMediaList $borderRadiusPosition={borderRadiusPosition} radius={radius} $backgroundColor={backColor}>
      <SocialIcon>
        <IconLink href="https://open.spotify.com/show/7omrpEfEN794JONo8jfQpV" target="_blank" rel="noopener noreferrer">
          <FaSpotify />
        </IconLink>
        <IconLink href="https://www.instagram.com/institutovidaparatodos/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </IconLink>
        <IconLink href="https://www.youtube.com/@InstitutoVidaParaTodos" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </IconLink>
      </SocialIcon>
    </SocialMediaList>
  )
}
