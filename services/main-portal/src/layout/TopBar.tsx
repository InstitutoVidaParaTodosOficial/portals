import React from "react"
import Image from "next/image"
import styled from "styled-components"
import { useRouter } from "next/router"

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

  :hover {
    cursor: pointer;
  }
`

export default function TopBar() {
  const router = useRouter()

  return (
    <TopBarWrapper>
      {/* Empty div to push logo to the center */}
      <div></div>

      <LogoWrapper onClick={() => router.push("/")}>
        <Image src={Logo} alt="IVPT Logo" width={200} />
      </LogoWrapper>

      <SocialMedia />
    </TopBarWrapper>
  )
}
