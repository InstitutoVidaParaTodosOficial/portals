import styled from "styled-components"

const NavMenuWrapper = styled.nav``

type MenuItem = {
  name: string
  path: string
}

const MENU_ITEMS: MenuItem[] = [
  {
    name: "Home",
    path: "/"
  }
]

export default function NavMenu() {
  return (
    <NavMenuWrapper>
      <ul>
        {MENU_ITEMS.map((item, index) => (
          <li key={index}>hey</li>
        ))}
      </ul>
    </NavMenuWrapper>
  )
}
