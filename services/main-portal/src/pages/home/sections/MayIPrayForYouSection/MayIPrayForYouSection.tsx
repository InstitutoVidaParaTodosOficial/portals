import styled from "styled-components"
import CrownLogo from "./assets/crown-logo.svg"
import BackgroundImage from "./assets/background.svg"
import GradientImage from "./assets/background-gradient.svg"
import MayIPrayForYouButton from "@/components/may-i-pray-for-you-button/MayIPrayForYouButton.tsx"
import { Colors } from "@/styles/types"

const MayIPrayForYouContainer = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  background: var(${Colors.primaryColor});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 32px 16px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url(${BackgroundImage.src});
    background-size: cover;
    background-position: center;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: url(${GradientImage.src});
    background-size: cover;
    background-position: center;
    z-index: 1;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`

const FirstTextContainer = styled.div`
  width: 838px;
  height: 170px;
`

const MainText = styled.h2`
  color: var(${Colors.textColor});
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0%;
`
const SecondTextContainer = styled.div`
  width: 956px;
  height: 244px;
`

const SubText = styled.p`
  color: var(${Colors.textColor});
  font-size: 24px;
  text-align: center;
  weight: 400px;
  letter-spacing: 0%;
`

const DividerContainer = styled.div`
  width: 100%;
  max-width: 500px;
  position: relative;
  margin: 32px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Line = styled.hr`
  width: 100vw;
  border: none;
  border-top: 1px solid var(${Colors.textColor});
  margin-left: -25vw;
  margin-right: -25vw;
`

const LogoWrapper = styled.div`
  width: 105px;
  height: 103px;
  border: 1px solid var(${Colors.textColor});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(${Colors.primaryColor});
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const LogoIcon = styled.img`
  scale: fill;
  transform: translate(-2px, -8px);
`

export default function HomePage() {
  return (
    <MayIPrayForYouContainer>
      <FirstTextContainer>
        <SubText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua...
        </SubText>
      </FirstTextContainer>
      <DividerContainer>
        <Line />
        <LogoWrapper>
          <LogoIcon
            src={typeof CrownLogo === "string" ? CrownLogo : CrownLogo.src}
            alt="Logo Coroa Instituto Vida para Todos"
          />
        </LogoWrapper>
      </DividerContainer>
      <SecondTextContainer>
        <MainText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </MainText>
        <SubText>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
        </SubText>
      </SecondTextContainer>
      <MayIPrayForYouButton />
    </MayIPrayForYouContainer>
  )
}
