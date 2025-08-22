import styled from "styled-components"
import { Colors } from "@/styles/types"

import MayIPrayForYouButton from "@/components/sections/MayIPrayForYouSection/MayIPrayForYouButton"
import HorizontalLine from "@/components/HorizontalLine/HorizontalLine"

const MayIPrayForYouContainer = styled.section`
  color: var(${Colors.lightGray});
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  justify-content: space-between;
  overflow: hidden;

  background-color: var(${Colors.primaryColor});
  background-size: cover;
  background-position: bottom;
`

export default function HomePage() {
  return (
    <MayIPrayForYouContainer style={{ paddingTop: "0" }}>
      <HorizontalLine logoSize={74} />

      <MayIPrayForYouButton />
    </MayIPrayForYouContainer>
  )
}
