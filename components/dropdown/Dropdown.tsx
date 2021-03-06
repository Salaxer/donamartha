import type { NextComponentType, NextPage } from 'next'

/* This DropDown requires Tailwind CSS v2.0+ */

import { FC, Fragment, PropsWithChildren, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Ripple } from '@Components'

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

interface PropsA {
  options: String[],
  selected: String,
  /**
   * Retorna el valor seleccionado
   */
  onChangeSelected: (e: any) => void;
}

const DropDown:FC<PropsA> = ({selected, onChangeSelected, options }) => {
  return (
    <Menu as="div" className="relative inline-block w-full">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
          {selected}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          <Ripple color='basic'/>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((item, index) =>{
              return(
                <Menu.Item key={index}>
                  {({ active }) => (
                    <button
                      onClick={()=> onChangeSelected(item)}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-lg w-full'
                      )}
                    >
                      {item}
                    </button>
                  )}
                </Menu.Item>
              )
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropDown;
