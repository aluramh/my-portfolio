import React, { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import { NavigationItem } from '.'

type Props = {
  item: NavigationItem
}

const MenuItem: FC<Props> = ({ item }) => {
  const router = useRouter()
  const isActive = router.pathname === item.href

  return (
    <div
      key={item.name}
      className={clsx(
        isActive
          ? 'bg-teal-900 text-white'
          : 'text-teal-300 hover:bg-teal-700 hover:text-white',
        'block px-3 py-2 rounded-md text-base font-medium',
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      <Link href={item.href}>{item.name}</Link>
    </div>
  )
}

export default MenuItem
