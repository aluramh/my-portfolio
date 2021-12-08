import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'

// Import pixel
import bodyImage from './pixel_me_body.png'
import armImage from './pixel_me_arm.png'
const WIDTH = 40
const HEIGHT = 53

type Sizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

interface Props {
  className?: string
  size?: Sizes
}
const PixelContainer = styled.div<{ size: Sizes }>`
  position: relative;

  ${({ size }) => `
    height: ${HEIGHT * size}px;
    width: ${WIDTH * size}px;
  `}

  & > * {
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
    position: absolute;
  }
`

const PixelMe: React.FC<Props> = (props) => {
  const { size = 7 } = props
  const armRef = useRef(null)

  function rotateArm() {
    const deg = 25

    gsap.to(armRef.current, { rotation: `+=${deg}`, duration: 1 })
    gsap.to(armRef.current, { rotation: `-=${deg}`, delay: 1, duration: 1 })
  }

  return (
    <PixelContainer className="mx-auto" size={size} onClick={rotateArm}>
      {/* Arm */}
      <div
        ref={armRef}
        // style={{ height: '500px', width: '500px' }}
        className="w-full h-full transform"
      >
        <Image id="arm-svg" src={armImage} layout="fill" objectFit="cover" />
      </div>

      {/* Body */}
      <Image src={bodyImage} layout="fill" objectFit="cover" />
    </PixelContainer>
  )
}

export default PixelMe
