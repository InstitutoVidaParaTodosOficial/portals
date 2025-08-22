import { useEffect, useState } from "react"
import styled from "styled-components"
import Image from "next/image"
import { FaBars } from "react-icons/fa"

const FaBarsIcon = FaBars as React.FC

import Logo from "@/layout/assets/logo.png"
import NavMenu from "@/layout/menu/NavMenu"
import LanguageSelector from "@/layout/menu/LanguageSelector"
import SocialMediaMenu from "@/layout/menu/SocialMedia"

const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 99999999;
`

const MobileTopBarWrapper = styled.div<{ $scrolled: boolean; $isSideBarOpen: boolean }>`
  background-color: ${({ $scrolled, $isSideBarOpen }) =>
    $scrolled || $isSideBarOpen ? "var(--primary-color)" : "transparent"};
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 60px;
  padding: 16px;
`

const LeftSide = styled.div``

const RightSide = styled.div``

const LogoWrapper = styled.div`
  position: relative;
  width: 162px;
  height: 52px;
`

const MenuToggleButton = styled.button`
  color: white;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 16px;
  background: var(--secondary-color);
`

const SideBarWrapper = styled.div`
  width: 320px;
  height: 667px;
  color: white;
  padding: 16px 32px;
  background: var(--primary-color);
`

export default function MobileTopBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleSidebar = () => {
    setIsOpen(state => !state)
  }

  const handleItemClick = () => {
    setIsOpen(false)
  }

  return (
    <Container>
      <MobileTopBarWrapper $scrolled={scrolled} $isSideBarOpen={isOpen}>
        <LeftSide>
          <MenuToggleButton type="button" onClick={toggleSidebar}>
            <FaBarsIcon />
          </MenuToggleButton>
        </LeftSide>

        <LogoWrapper>
          <Image src={Logo} alt="Website Logo" fill style={{ objectFit: "contain" }} />
        </LogoWrapper>

        <RightSide>
          <LanguageSelector />
        </RightSide>
      </MobileTopBarWrapper>

      {isOpen && (
        <SideBarWrapper>
          <div>
            <NavMenu alignment="vertical" gap="32px" onItemClickedCb={handleItemClick} />
          </div>
          <div>
            <SocialMediaMenu />
          </div>
        </SideBarWrapper>
      )}
    </Container>
  )
}
