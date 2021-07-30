import React from 'react'
import clsx from 'clsx'

interface Props {
  className?: string
  color?: string
}

const Pill: React.FC<Props> = ({ children, className, color = 'red' }) => (
  <li
    className={clsx(
      `rounded-3xl text-white text-md whitespace-nowrap text-sm`,
      'px-4 py-0.5',
      // Add a default color if a color was not given
      !color && 'bg-teal-400',
      className,
    )}
    style={{ backgroundColor: color }}
  >
    {children}
  </li>
)

export default Pill
