import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

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

const PixelMe: React.FC<Props> = props => {
  const { size = 7 } = props

  return (
    <PixelContainer className='  mx-auto' size={size}>
      <Image src={bodyImage} layout='fill' objectFit='cover' />
      <Image src={armImage} layout='fill' objectFit='cover' />
    </PixelContainer>
  )
}

export default PixelMe
