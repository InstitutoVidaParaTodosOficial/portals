import React from "react"
import styled from "styled-components"
import ArrowIcon from "./assets/Icon.svg"
import { useTranslations } from "next-intl"

const BORDER_RADIUS = "5px"

interface MayIPrayForYouButtonProps {
  textColor?: string
}

const Button = styled.div<{ $color: string }>`
  display: flex;
  font-size: 22px;
  border-radius: ${BORDER_RADIUS};
  align-items: center;
  border: 1px solid ${({ $color }) => $color};
  padding-left: 16px;

  :hover {
    cursor: pointer;
  }
`

const Text = styled.span<{ $color?: string }>`
  margin-right: 16px;
`

const IconBox = styled.div<{ $color: string }>`
  background-color: ${({ $color }) => $color};
  border-bottom-right-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS};
`
const Icon = styled.img`
  max-width: 22px;
  padding: 8px 16px;
`

export default function MayIPrayForYouButton({ textColor = "white" }: MayIPrayForYouButtonProps) {
  const t = useTranslations("sections.may_i_pray_for_you")

  const onClickHandler = () => {
    const link = t("link")
    window.open(link, "_blank", "noopener,noreferrer")
  }

  return (
    <Button $color={textColor} onClick={onClickHandler}>
      <Text $color={textColor}>{t("title")}</Text>
      <IconBox $color={textColor == "white" ? "var(--secondary-color)" : textColor}>
        <Icon src={ArrowIcon.src} alt="Icon" />
      </IconBox>
    </Button>
  )
}
