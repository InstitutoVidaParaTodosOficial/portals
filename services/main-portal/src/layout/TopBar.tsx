import React, { useEffect, useState } from "react"
import Image from "next/image"
import styled from "styled-components"
import { useRouter } from "next/router"

import Logo from "./assets/logo.png"
import NavMenu from "./NavMenu"

const TopBarWrapper = styled.div<{ $scrolled: boolean }>`
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
  padding: 16px 32px;
  background-color: ${({ $scrolled }) => ($scrolled ? "var(--primary-color)" : "transparent")};
  transition:
    background-color 0.2s,
    box-shadow 0.2s;
  box-shadow: ${({ $scrolled }) => ($scrolled ? "0 2px 12px 0 rgba(0,0,0,0.18)" : "none")};
`

const LogoWrapper = styled.div`
  justify-content: center;

  :hover {
    cursor: pointer;
  }
`

export default function TopBar() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <TopBarWrapper $scrolled={scrolled}>
      <LogoWrapper onClick={() => router.push("/")}>
        <Image src={Logo} alt="Website Logo" width={200} />
      </LogoWrapper>

      <NavMenu />
    </TopBarWrapper>
  )
}
