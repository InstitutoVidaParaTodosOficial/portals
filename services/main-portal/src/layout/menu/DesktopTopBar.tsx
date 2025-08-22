import React, { useEffect, useState } from "react"
import Image from "next/image"
import styled from "styled-components"
import { useRouter } from "next/router"

import Logo from "../assets/logo.png"
import NavMenu from "./NavMenu"
import LanguageSelector from "@/layout/menu/LanguageSelector"

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

const LeftSide = styled.div`
  justify-content: center;
  position: relative;
  width: 200px; // set your desired width
  height: 48px; // set your desired height

  :hover {
    cursor: pointer;
  }
`

const RightSide = styled.div``

export default function DesktopTopBar() {
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
      <LeftSide onClick={() => router.push("/")}>
        <Image src={Logo} alt="Website Logo" fill style={{ objectFit: "contain" }} />
      </LeftSide>

      <NavMenu />

      <RightSide>
        <LanguageSelector />
      </RightSide>
    </TopBarWrapper>
  )
}
