import styled from "styled-components"
import MayIPrayForYouButton from "@/components/may-i-pray-for-you-button/MayIPrayForYouButton.tsx"
import { Colors } from "@/styles/types"
import { Blinker } from "next/font/google"
import HorizontalLine from "@/components/HorizontalLine/HorizontalLine"

const blinker = Blinker({
  subsets: ["latin"],
  weight: "400",
  style: "normal"
})

const MayIPrayForYouContainer = styled.div`
  font-family: ${blinker.style.fontFamily};
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
