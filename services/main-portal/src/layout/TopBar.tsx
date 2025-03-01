import React from "react"
import Image from "next/image"
import styled from "styled-components"

import SocialMedia from "@/components/social-medias/SocialMedia"

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

export default function TopBar() {
  return (
    <TopBarWrapper>
      <div></div>
      {/* Empty div to push logo to the center */}
      <LogoWrapper>
        <Image src={Logo} alt="IVPT Logo" width={200} />
      </LogoWrapper>

      <SocialMedia />
    </TopBarWrapper>
  )
}
