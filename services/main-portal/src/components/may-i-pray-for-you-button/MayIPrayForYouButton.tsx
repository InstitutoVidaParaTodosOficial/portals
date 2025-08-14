import React from "react"
import styled from "styled-components"
import ArrowIcon from "./assets/Icon.svg"
import { Colors } from "@/styles/types"
import { useTranslations } from "next-intl"

interface MayIPrayForYouButtonProps {
  textColor?: string
}

const Button = styled.button<{ $color?: string }>`
  display: flex;
  gap: 16px;
  align-items: center;
  background: transparent;
  border: 2px solid ${({ $color }) => $color || `var(${Colors.lightGray})`};
  border-radius: 15px;
  padding: 0 0 0 16px;
  font-family: inherit;
  font-size: inherit;
  transition: border 0.2s;
  &:hover {
    border-color: var(${Colors.secondaryColor});
    cursor: pointer;
  }
`

const Text = styled.span<{ $color?: string }>`
  flex: 1;
  color: ${({ $color }) => $color || `var(${Colors.lightGray})`};
  font-weight: 600;
  text-align: center;
`

const IconBox = styled.div<{ $color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $color }) => $color || `var(${Colors.secondaryColor})`};
  border-radius: 13px;
  transition: background 0.2s;

  button:hover & {
    background: var(${Colors.secondaryColor});
  }
`
const Icon = styled.img`
  max-width: 22px;
  padding: 8px 16px;
`

export default function MayIPrayForYouButton({ textColor }: MayIPrayForYouButtonProps) {
  const t = useTranslations("sections.may_i_pray_for_you")

  const onClickHandler = () => {
    const link = t("link")
    window.open(link, "_blank", "noopener,noreferrer")
  }

  return (
    <Button type="button" $color={textColor} onClick={onClickHandler}>
      <Text $color={textColor}>{t("title")}</Text>
      <IconBox $color={textColor}>
        <Icon src={ArrowIcon.src} alt="Icon" />
      </IconBox>
    </Button>
  )
}
