import React from 'react'
import clsx from 'clsx'

interface Props {
  className?: string
  color?: string
}

const Pill: React.FC<Props> = ({ children, className, color }) => (
  <li
    className={clsx(
      `rounded text-white text-md whitespace-nowrap text-xs`,
      'px-3 py-0.5',
      // Add a default color if a color was not given
      !color && 'bg-blueGray-700 ',
      className,
    )}
    style={{ backgroundColor: color }}
  >
    <span className="opacity-95">{children}</span>
  </li>
)

export default Pill
