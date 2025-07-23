import React, { useRef } from "react"
import styled from "styled-components"

const CarouselWrapper = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 16px 0;

  & > * {
    flex: 0 0 auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`

type CarouselProps = {
  children: React.ReactNode
}

export default function Carousel({ children }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  let isDown = false
  let startX = 0
  let scrollLeft = 0

  const onMouseDown = (e: React.MouseEvent) => {
    isDown = true
    startX = e.pageX - (carouselRef.current?.offsetLeft || 0)
    scrollLeft = carouselRef.current?.scrollLeft || 0
    document.body.style.userSelect = "none"
  }

  const onMouseLeave = () => {
    isDown = false
    document.body.style.userSelect = ""
  }

  const onMouseUp = () => {
    isDown = false
    document.body.style.userSelect = ""
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0)
    const walk = x - startX
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk
    }
  }

  return (
    <CarouselWrapper
      ref={carouselRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {children}
    </CarouselWrapper>
  )
}
