import React from "react"
import Image from "next/image"
import styled from "styled-components"
import { useRouter } from "next/router"

import Logo from "./assets/logo.png"
import NavMenu from "./NavMenu"

const TopBarWrapper = styled.div`
  display: flex;
  position: fixed;
  box-sizing: border-box;
  top: 0;
  height: var(--header-height);
  left: 0;
  width: 100%;
  z-index: 9999999;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: transparent;
`

const LogoWrapper = styled.div`
  justify-content: center;

  :hover {
    cursor: pointer;
  }
`

export default function TopBar() {
  const router = useRouter()

  return (
    <TopBarWrapper>
      <LogoWrapper onClick={() => router.push("/")}>
        <Image src={Logo} alt="Website Logo" width={200} />
      </LogoWrapper>

      <NavMenu />
    </TopBarWrapper>
  )
}
