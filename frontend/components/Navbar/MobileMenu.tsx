/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const MobileMenu = ({ open }) => {
  return (
    <>
      <div className="flex items-center -mr-2 sm:hidden">
        {/* Mobile menu button */}
        <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FFA60C]">
          <span className="sr-only">Open main menu</span>
          {open ? (
            <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
          )}
        </Disclosure.Button>
      </div>
    </>
  );
};

export default MobileMenu;
