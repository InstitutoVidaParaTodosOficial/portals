import React from "react"
import styled from "styled-components"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const IconLink = styled.a`
  color: var(--background-color);
  font-size: 24px;
  text-decoration: none;

  &:hover {
    color: var(--accent-color);
  }
`

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center
`

export default function SocialMedia() {
  return (
    <SocialMediaIcons>
      <IconLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </IconLink>
      <IconLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </IconLink>
      <IconLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </IconLink>
    </SocialMediaIcons>
  )
}
