import React from "react"
import styled from "styled-components"
import ArrowIcon from "./assets/Icon.svg"
import { Colors } from "@/styles/types"

const Button = styled.button`
  display: flex;
  gap: 16px;
  align-items: center;
  background: transparent;
  border: 2px solid var(${Colors.lightGray});
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

const Text = styled.span`
  flex: 1;
  color: var(${Colors.lightGray});
  font-weight: 600;
  text-align: center;
`

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(${Colors.secondaryColor});
  border-radius: 13px;
`
const Icon = styled.img`
  max-width: 22px;
  padding: 8px 16px;
`

export default function MayIPrayForYouDarkButton() {
  return (
    <Button type="button">
      <Text>Posso orar por você?</Text>

      <IconBox>
        <Icon src={ArrowIcon.src} alt="Icon" />
      </IconBox>
    </Button>
  )
}
