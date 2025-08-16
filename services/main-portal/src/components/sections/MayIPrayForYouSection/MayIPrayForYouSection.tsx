import styled from "styled-components"
import { Colors } from "@/styles/types"

import MayIPrayForYouButton from "@/components/sections/MayIPrayForYouSection/MayIPrayForYouButton"
import HorizontalLine from "@/components/HorizontalLine/HorizontalLine"

const MayIPrayForYouContainer = styled.div`
  color: var(${Colors.lightGray});
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  justify-content: space-between;
  padding: 32px 16px;
  overflow: hidden;

  background-color: var(${Colors.primaryColor});
  background-size: cover;
  background-position: bottom;
`

export default function HomePage() {
  return (
    <MayIPrayForYouContainer>
      <HorizontalLine logoSize={60} />

      <MayIPrayForYouButton />
    </MayIPrayForYouContainer>
  )
}
