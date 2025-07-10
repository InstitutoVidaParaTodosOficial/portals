import styled from "styled-components"
import Image from "next/image"
import Logo from "./assets/crown-logo.png"
import { FaPaperPlane } from "react-icons/fa"

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(180deg, #082d50 60%, #235b8c 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
`

const MainText = styled.h2`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 550;
  margin: 24px 0 12px 0;
  text-align: center;
`

const SubText = styled.p`
  color: #fff;
  font-size: 1.2rem;
  margin: 0 0 24px 0;
  text-align: center;
  max-width: 700px;
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
  width: 100%;
  border: none;
  border-top: 2px solid #fff;
  margin: 0;
`

const LogoWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #082d50;
  z-index: 1;
  overflow: hidden;
`

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 12px;
  padding: 0;
  height: 48px;
  width: 320px;
  max-width: 90vw;
  cursor: pointer;
  font-family: inherit;
  overflow: hidden;
  transition: border 0.2s;

  &:hover {
    border-color: #7ecbff;
  }
`

const ButtonText = styled.span`
  flex: 1;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.5px;
`

const IconBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #235b8c;
  height: 100%;
  width: 48px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: 2px solid #fff;
`

export default function HomePage() {
  return (
    <Wrapper>
      <SubText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua...
      </SubText>
      <DividerContainer>
        <Line />
        <LogoWrapper>
          <Image src={Logo} alt="Logo" width={60} height={60} />
        </LogoWrapper>
      </DividerContainer>
      <MainText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </MainText>
      <SubText>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
      </SubText>
      <ActionButton>
        <ButtonText>Posso orar por você?</ButtonText>
        <IconBox>
          <FaPaperPlane size={20} color="#fff" />
        </IconBox>
      </ActionButton>
    </Wrapper>
  )
}
