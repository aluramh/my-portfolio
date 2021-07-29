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
          'flex-col items-center pt-5',
          'text-teal-700 leading-relaxed tracking-wide',
          'sm:flex sm:flex-row sm:h-screen',
        )}
      >
        {/* Left side */}
        <div className='sm:w-1/2 text-base'>
          <div className='flex flex-row mb-4 sm:mb-3'>
            {/* Introduction and name */}
            <div className='w-2/3'>
              <div className='text-base font-normal mb-3 sm:text-sm'>
                Hello! My name is
              </div>
              <div className='text-6xl sm:text-5xl md:text-8xl font-bold text-teal-900 mb-4 sm:mb-3'>
                Alex <br className='sm:hidden' />
                Ramírez
              </div>
            </div>

            {/* Appears on top when on mobile */}
            <div className='flex sm:hidden w-1/3 justify-center self-center h-32'>
              <PixelMe />
            </div>
          </div>

          <p id='headline-text' className="text-lg">{headline}</p>
        </div>

        {/* Right side */}
        <div className='hidden sm:block w-1/2 py-10 pl-14'>
          <PixelMe className='cursor-pointer' />
        </div>
      </div>
    </section>
  )
}

export default Headline
