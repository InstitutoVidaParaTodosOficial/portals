import { ReactElement } from "react"
import styled from "styled-components"

type StickyNoteProps = {
  children: ReactElement
  rotate?: number
  maxWidth?: `${string}px`
}

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
  width: 100%;
`

const ChildrenWrapper = styled.div`
  padding: 0 16px 16px 16px;
`

export default function StickyNote({ children, rotate = 0, maxWidth }: StickyNoteProps) {
  return (
    <StickyNoteBackground rotate={rotate} maxWidth={maxWidth}>
      <TopGradient />

      <ChildrenWrapper>{children}</ChildrenWrapper>
    </StickyNoteBackground>
  )
}
