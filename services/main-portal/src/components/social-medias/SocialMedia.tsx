import React from "react"
import styled from "styled-components"
import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa"

type BorderRadiusPosition = "none" | "left" | "right" | "all"

const SocialMediaList = styled.div<{
  $borderRadiusPosition: BorderRadiusPosition | undefined
  radius: string
  $backgroundColor: `#${string}`
}>`
  padding: 19px 15px 19px 15px;
  background-color: ${props => props.$backgroundColor};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
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

  position: fixed;
  top: 30%;
  right: 0;
  transform: translateY(-75%);
  z-index: 1000;
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

const IconLink = styled.a`
  color: #ffffff;
  font-size: 35px;
  text-decoration: none;
`

const WhiteBorder = styled.div`
  width: 35px;
  height: 35px;
  background-color: #ffffff;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
`

const StyledYoutubeIcon = styled(FaYoutube)`
  font-size: 25px;
  color: #082d50;
  position: relative;
  z-index: 2;
`

const IconLinkYoutube = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40px;
  height: 40px;
`

type SocialMediasListProps = {
  borderRadiusPosition?: BorderRadiusPosition
  radius?: string
  backColor?: `#${string}`
}

export default function SocialMedia({
  borderRadiusPosition,
  radius = "25px",
  backColor = "#082D50"
}: SocialMediasListProps) {
  return (
    <SocialMediaList $borderRadiusPosition={borderRadiusPosition} radius={radius} $backgroundColor={backColor}>
      <SocialIcon>
        <IconLink href="https://open.spotify.com/show/7omrpEfEN794JONo8jfQpV" target="_blank" rel="noopener noreferrer">
          <FaSpotify />
        </IconLink>
      </SocialIcon>

      <SocialIcon>
        <IconLink href="https://www.instagram.com/institutovidaparatodos/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </IconLink>
      </SocialIcon>

      <SocialIcon>
        <IconLinkYoutube
          href="https://www.youtube.com/@InstitutoVidaParaTodos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhiteBorder />
          <StyledYoutubeIcon />
        </IconLinkYoutube>
      </SocialIcon>
    </SocialMediaList>
  )
}
