import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const FaChevronLeftIcon = FaChevronLeft as React.FC
const FaChevronRightIcon = FaChevronRight as React.FC

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

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: background 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`

const CarouselContainer = styled.div`
  position: relative;
`

type CarouselProps = {
  children: React.ReactNode
}

export default function Carousel({ children }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScroll, setCanScroll] = useState(false)
  let isDown = false
  let startX = 0
  let scrollLeft = 0

  useEffect(() => {
    const checkScroll = () => {
      const el = carouselRef.current
      if (el) {
        setCanScroll(el.scrollWidth > el.clientWidth)
      }
    }
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  const scrollBy = (amount: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: amount, behavior: "smooth" })
    }
  }

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
    <CarouselContainer>
      {canScroll && (
        <ArrowButton style={{ left: 8 }} aria-label="Scroll left" onClick={() => scrollBy(-200)}>
          <FaChevronLeftIcon />
        </ArrowButton>
      )}
      {canScroll && (
        <ArrowButton style={{ right: 8 }} aria-label="Scroll right" onClick={() => scrollBy(200)}>
          <FaChevronRightIcon />
        </ArrowButton>
      )}
      <CarouselWrapper
        ref={carouselRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {children}
      </CarouselWrapper>
    </CarouselContainer>
  )
}
