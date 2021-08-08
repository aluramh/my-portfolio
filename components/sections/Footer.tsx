import clsx from 'clsx'
import React from 'react'
import SocialRow from '../SocialRow'

interface Props {}

const email = 'aluramh@gmail.com'

const Footer: React.FC<Props> = props => {
  const d = new Date()

  return (
    <footer
      id='footer'
      // This should be controlled "from above"
      className='py-24 flex align-middle'
    >
      <div className='sm:mx-auto'>
        <div className='text-base mb-2 text-teal-700'>
          {"Let's work together."}
        </div>

        <div
          className={clsx(
            'tracking-wide font-bold text-2xl',
            'md:text-5xl sm:text-3xl',
            'transition-colors text-teal-800 hover:text-teal-900',
          )}
        >
          <a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer'>
            {email}
          </a>
        </div>

        {/* Separator */}
        <div className='mb-8'></div>

        <SocialRow />

        <div className='text-sm text-teal-700'>
          © {d.getFullYear()}, designed and developed by{' '}
          <span className='underline'>Alex Ramírez</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
