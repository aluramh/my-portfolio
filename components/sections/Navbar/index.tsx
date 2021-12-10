/* This example requires Tailwind CSS v2.0+ */
import React, { FC } from 'react'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import clsx from 'clsx'

import Logo from '../../icons/Logo'
import MenuItem from './MenuItem'
import { useRouter } from 'next/router'
import styled from 'styled-components'

export type NavigationItem = {
  name: string
  href: string
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: 'https://blog.alexram.dev' },
]

const Navbar: FC = (props) => {
  const router = useRouter()

  return (
    <nav className="bg-teal-800 w-full z-50 fixed">
      <Disclosure
        as="div"
        className="container mx-auto w-full z-50 px-4 sm:px-8 lg:px-24"
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button
                    className={clsx(
                      'inline-flex items-center justify-center p-2 rounded-md text-teal-400',
                      'hover:text-white hover:bg-teal-700',
                      'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white',
                    )}
                  >
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    {/* For large screens */}
                    <div
                      className="relative block lg:hidden h-10 w-10 align-middle cursor-pointer"
                      onClick={() => router.push('/')}
                    >
                      <Logo />
                    </div>

                    <div
                      className="cursor-pointer relative hidden lg:block h-10 w-10 align-middle"
                      onClick={() => router.push('/')}
                    >
                      <Logo />
                    </div>

                    {/* For smaller screens */}
                    <div
                      className={clsx(
                        'hidden h-8 w-auto ml-4',
                        'uppercase font-extrabold text-white tracking-tight text-2xl headline-text',
                        // 'transform -translate-y-0.5',
                        'lg:block',
                      )}
                    >
                      Alex R
                    </div>
                  </div>

                  {/* Menu items for larger screens */}
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <MenuItem item={item} key={item.href} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* <button className='bg-teal-800 p-1 rounded-full text-teal-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-800 focus:ring-white'>
                    <span className='sr-only'>View notifications</span>
                    <BellIcon className='h-6 w-6' aria-hidden='true' />
                  </button> */}

                  <a
                    href={'/Alejandro Ramirez Profile (2021-07-21).pdf'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(
                      'px-3 py-2 rounded-md text-sm text-teal-300 font-medium transition-all',
                      'hover:bg-teal-900 hover:text-teal-400',
                      'border-2 border-teal-300',
                    )}
                    title="Download my resumé"
                  >
                    Resumé
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile nav items */}
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <MenuItem item={item} key={item.href} />
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </nav>
  )
}

export default Navbar
