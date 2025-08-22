import { useRouter } from "next/router"
import { useTranslations } from "next-intl"
import styled from "styled-components"

const NavMenuItemsList = styled.ul<{
  $alignment: "vertical" | "horizontal"
  $gap: `${number}px`
}>`
  display: flex;
  flex-direction: ${({ $alignment }) => ($alignment === "vertical" ? "column" : "row")};
  margin: 0;
  gap: ${({ $gap }) => $gap};
  padding: 0;
  list-style: none;

  li:hover {
    cursor: pointer;
  }
`

type MenuItem = {
  name: string
  path: string
  target?: HrefTarget
}

enum HrefTarget {
  BLANK = "_blank",
  SELF = "_self"
}

const MENU_ITEMS: MenuItem[] = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "pedro-dong",
    path: "/pedro-dong"
  },
  {
    name: "kingdom-investors",
    path: "/kingdom-investors"
  },
  {
    name: "missionary",
    path: "/become-a-missionary"
  },
  {
    name: "immersion",
    path: "https://oquetemosvistoeouvido.com.br/",
    target: HrefTarget.BLANK
  }
]

type NavMenuProps = {
  alignment?: "vertical" | "horizontal"
  gap?: `${number}px`
  onItemClickedCb?: (item: MenuItem) => void
}

export default function NavMenu({ alignment = "horizontal", gap = "16px", onItemClickedCb }: NavMenuProps) {
  const router = useRouter()
  const t = useTranslations("nav-menu")

  const handleNavItemClick = (item: MenuItem) => {
    if (item.target === HrefTarget.BLANK) {
      window.open(item.path, item.target)
    } else {
      router.push(item.path)
    }

    if (onItemClickedCb !== undefined) {
      onItemClickedCb(item)
    }
  }

  return (
    <nav>
      <NavMenuItemsList $alignment={alignment} $gap={gap}>
        {MENU_ITEMS.map((item, index) => (
          <li key={index}>
            <a onClick={() => handleNavItemClick(item)}>{t(item.name)}</a>
          </li>
        ))}
      </NavMenuItemsList>
    </nav>
  )
}
