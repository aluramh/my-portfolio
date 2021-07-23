import React from 'react'
import SocialRow from '../SocialRow'

const Footer: React.FC = props => {
  const d = new Date()

  return (
    <footer
      id='footer'
      // This should be controlled "from above"
      className='py-24 md:px-12 sm:px-3 flex align-middle'
    >
      <div className='mx-auto px-2'>
        <div className='text-xl mb-2 text-teal-700'>
          {"Let's work together."}
        </div>

        <div className='md:text-5xl tracking-wide font-medium text-3xl'>
          <a
            href='mailto:aluramh@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            aluramh@gmail.com
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
