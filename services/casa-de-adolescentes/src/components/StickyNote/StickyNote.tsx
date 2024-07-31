import { ReactElement } from "react"
import styled from "styled-components"
import Image from "next/image"

import RedThumbtackPng from "./assets/red-thumbtack.png"

const StickyNoteBackground = styled.div<{
  rotate?: number
  maxWidth?: `${string}px`
}>`
  background-color: #f3e27a;
  max-width: ${props => props.maxWidth || "300px"};
  transform: rotate(${props => props.rotate + "deg" || "0deg"});
`

const TopGradient = styled.div`
  background-image: linear-gradient(to bottom, #efd227, #f3e27a);
  height: 30px;
  position: relative;
  width: 100%;
`

const ChildrenWrapper = styled.div`
  padding: 0 16px 16px 16px;
`

const RedThumbtack = styled(Image)`
  position: absolute;
  top: -25px;
  left: 45%;
`

type StickyNoteProps = {
  children: ReactElement
  rotate?: number
  maxWidth?: `${string}px`
  displayThumbtack?: boolean
}

export default function StickyNote({
  children,
  rotate = 0,
  maxWidth = "300px",
  displayThumbtack = true
}: StickyNoteProps) {
  return (
    <StickyNoteBackground rotate={rotate} maxWidth={maxWidth}>
      <TopGradient>{displayThumbtack && <RedThumbtack src={RedThumbtackPng} alt="red thumbtack" />}</TopGradient>

      <ChildrenWrapper>{children}</ChildrenWrapper>
    </StickyNoteBackground>
  )
}
