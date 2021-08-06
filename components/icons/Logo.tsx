import React, { FC } from 'react'
import Image from 'next/image'
import brandImage from '../../assets/icons/brand_logo.svg'
import clsx from 'clsx'

type Props = {}

const Logo: FC<Props> = props => {
  return (
    <div
      className={clsx(
        'transition-colors rounded-full bg-teal-400 h-full p-2',
        'hover:bg-teal-500',
      )}
    >
      <Image
        src={brandImage}
        layout='responsive'
        className='transform'
        alt='Brand image'
      />
    </div>
  )
}

export default Logo
