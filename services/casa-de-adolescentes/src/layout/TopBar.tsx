import styled from "styled-components"
import Image from "next/image"

import svgLogo from "./assets/logo.svg"

import { Just_Me_Again_Down_Here } from "next/font/google"

const justMeAgainDownHere = Just_Me_Again_Down_Here({
  subsets: ["latin"],
  weight: "400"
})

const TopBarWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
`

const TopBarNavItemsList = styled.ul`
  display: flex;
  gap: 46px;

  text-transform: uppercase;
  font-size: 32px;
`

const LogWrapper = styled.div`
  width: 142px;
  height: auto;
`

const Logo = styled(Image)`
  width: 100%;
  height: auto;
`

type NavItem = {
  id: number
  link: string
  title: string
}

const navItems: Array<NavItem> = [
  {
    id: 1,
    title: "Sobre Nós",
    link: "#about-us"
  },
  {
    id: 2,
    title: "Casas",
    link: "#places"
  },
  {
    id: 3,
    title: "Participar",
    link: "#join"
  },
  {
    id: 3,
    title: '"Vem e Vê"',
    link: "#come-and-see"
  }
]

export default function TopBar() {
  return (
    <TopBarWrapper>
      <TopBarNavItemsList className={`unstyled-list ${justMeAgainDownHere.className}`}>
        {navItems.map(item => (
          <li key={item.id}>
            <a className="unstyled-anchor" href={item.link} target="_self">
              {item.title}
            </a>
          </li>
        ))}
      </TopBarNavItemsList>

      <LogWrapper>
        <Logo src={svgLogo} alt="Logo casa de adolescentes" />
      </LogWrapper>
    </TopBarWrapper>
  )
}
