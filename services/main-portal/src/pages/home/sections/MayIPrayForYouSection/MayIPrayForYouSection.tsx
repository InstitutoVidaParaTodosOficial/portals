import styled from "styled-components"
import BackgroundImage from "./assets/background.jpg"
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
  justify-content: space-between;
  padding: 32px 16px;
  overflow: hidden;

  background-color: var(${Colors.primaryColor});
  background: url(${BackgroundImage.src});
  background-size: cover;
  background-position: bottom;
`

export default function HomePage() {
  return (
    <MayIPrayForYouContainer>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>

      <HorizontalLine />

      <div>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </h2>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
        </p>
      </div>
      <MayIPrayForYouButton />
    </MayIPrayForYouContainer>
  )
}
