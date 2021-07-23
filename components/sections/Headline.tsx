import clsx from 'clsx'
import React from 'react'
import { headline } from '../../assets/data/profile'
import profilePic from '../../assets/images/pixel-me.svg'
import PixelMe from '../PixelMe'

const Headline = () => {
  return (
    <section id='headline'>
      <div
        className={clsx(
          'h-screen flex flex-row items-center',
          'text-teal-700 leading-relaxed tracking-wide',
        )}
      >
        {/* Left side */}
        <div className='w-1/2 text-base'>
          <div className='text-sm mb-3 font-light'>Hello! My name is</div>
          <div className='text-8xl font-bold text-teal-900 mb-3'>Alex Ramiréz</div>
          <p>{headline}</p>
        </div>

        {/* Right side */}
        <div className='w-1/2 py-10 pl-14'>
          <PixelMe className='cursor-pointer' />
        </div>
      </div>
    </section>
  )
}

export default Headline
