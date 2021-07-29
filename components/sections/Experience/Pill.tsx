import React from 'react'
import clsx from 'clsx'

interface Props {
  className?: string
}

const Pill: React.FC<Props> = ({ children, className }) => (
  <li
    className={clsx(
      `bg-teal-400 text-white text-md rounded-3xl whitespace-nowrap text-sm`,
      'px-4 py-0.5',
      className,
    )}
  >
    {children}
  </li>
)

export default Pill
