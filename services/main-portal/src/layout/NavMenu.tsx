import { useRouter } from "next/router"

import styled from "styled-components"
import { useTranslations } from "next-intl"

const NavMenuWrapper = styled.nav``

const NavMenuItemsList = styled.ul`
  display: flex;
  gap: 16px;
  padding: 0;
  list-style: none;

  li:hover {
    cursor: pointer;
  }
`

type MenuItem = {
  name: string
  path: string
}

const MENU_ITEMS: MenuItem[] = [
  {
    name: "about-us",
    path: "/about-us"
  },
  {
    name: "news-feed",
    path: "/news-feed"
  },
  {
    name: "donations",
    path: "/donations"
  }
]

export default function NavMenu() {
  const router = useRouter()
  const t = useTranslations("nav-menu")

  return (
    <NavMenuWrapper>
      <NavMenuItemsList>
        {MENU_ITEMS.map((item, index) => (
          <li key={index}>
            <a onClick={() => router.push(item.path)}>{t(item.name)}</a>
          </li>
        ))}
      </NavMenuItemsList>
    </NavMenuWrapper>
  )
}
