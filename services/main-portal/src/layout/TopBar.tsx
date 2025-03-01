import React from "react"
import Image from "next/image"
import styled from "styled-components"

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

import Logo from "./assets/logo.png"

const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: var(--primary-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const LogoWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

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
`

export default function TopBar() {
  return (
    <TopBarWrapper>
      <div></div>
      {/* Empty div to push logo to the center */}
      <LogoWrapper>
        <Image src={Logo} alt="IVPT Logo" width={200} />
      </LogoWrapper>
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
    </TopBarWrapper>
  )
}
