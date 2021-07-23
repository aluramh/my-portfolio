/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, FC } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import clsx from 'clsx'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false }
]

const Navbar: FC = props => {
  return (
    <div className='bg-teal-800'>
      <Disclosure as='nav' className='container mx-auto'>
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
              <div className='relative flex items-center justify-between h-16'>
                <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button
                    className={clsx(
                      'inline-flex items-center justify-center p-2 rounded-md text-teal-400',
                      'hover:text-white hover:bg-teal-700',
                      'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    )}
                  >
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                  <div className='flex-shrink-0 flex items-center'>
                    <img
                      className='block lg:hidden h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                      alt='Workflow'
                    />
                    <img
                      className='hidden lg:block h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                      alt='Workflow'
                    />
                  </div>
                  <div className='hidden sm:block sm:ml-6'>
                    <div className='flex space-x-4'>
                      {navigation.map(item => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={clsx(
                            item.current
                              ? 'bg-teal-900 text-white'
                              : 'text-teal-300 hover:bg-teal-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  {/* <button className='bg-teal-800 p-1 rounded-full text-teal-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-800 focus:ring-white'>
                    <span className='sr-only'>View notifications</span>
                    <BellIcon className='h-6 w-6' aria-hidden='true' />
                  </button> */}

                  <a
                    href={'/Alejandro Ramirez Profile (2021-07-21).pdf'}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={clsx(
                      'bg-teal-300 text-teal-800 transition-all',
                      'hover:bg-teal-400 hover:text-teal-900',
                      // 'border-2 border-teal-900',
                      'px-3 py-2 rounded-md text-sm font-medium'
                    )}
                    title='Download my resumé'
                  >
                    Resumé
                  </a>
                </div>
              </div>
            </div>

            <Disclosure.Panel className='sm:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1'>
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      item.current
                        ? 'bg-teal-900 text-white'
                        : 'text-teal-300 hover:bg-teal-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default Navbar
