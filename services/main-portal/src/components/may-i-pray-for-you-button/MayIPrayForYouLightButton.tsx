import React from "react"
import styled from "styled-components"
import ArrowIcon from "./assets/Icon.svg"
import { Colors } from "@/styles/types"

const ButtonBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: none;
  border: 2px solid var(${Colors.primaryColor});
  border-radius: 15px;
  padding: 0;
  height: 112px;
  width: 658px;
  font-family: inherit;
  overflow: hidden;
  transition: border 0.2s;
  &:hover {
    border-color: #082b4c;
  }
`

const ButtonText = styled.span`
  flex: 1;
  color: #000000;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  style: SemiBold;
  letter-spacing: 0%;
`

const IconBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(${Colors.primaryColor});
  height: 108px;
  width: 198px;
  border-radius: 15px;
`

const Icon = styled.img`
  object-fit: contain;
  height: 55%;
  width: auto;
  filter: brightness(0) invert(1);
`

export default function MayIPrayForYouLightButton() {
  return (
    <ButtonBox>
      <ButtonText>Posso orar por você?</ButtonText>
      <IconBox>
        <Icon src={typeof ArrowIcon === "string" ? ArrowIcon : ArrowIcon.src} alt="Ícone" />
      </IconBox>
    </ButtonBox>
  )
}
