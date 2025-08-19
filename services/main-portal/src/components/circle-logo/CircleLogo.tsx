import styled from "styled-components"
import { Colors } from "@/styles/types"
import logoCrown from "@/components/circle-logo/assets/logoCrown.svg"

interface CircleLogoProps {
  size?: number
  borderSize?: number
}

const LogoWrapper = styled.div<{ $size: number; $borderSize: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border: ${({ $borderSize }) => $borderSize}px solid var(${Colors.lightGray});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(${Colors.primaryColor});
  background-image: url(${logoCrown.src});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
`

export default function CircleLogo({ size = 90, borderSize = 1 }: CircleLogoProps) {
  return <LogoWrapper $size={size} $borderSize={borderSize} />
}
