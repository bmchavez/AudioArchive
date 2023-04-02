/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import NavLeft from './NavLeft';
import NavRight from './NavRight';
import MobileMenu from './MobileMenu';
import MobileMenuOptions from './MobileMenuOptions';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavHeader() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <NavLeft />
              <NavRight />
              <MobileMenu open={open} />
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-[#FFA60C] text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as={Link}
                href="/project_files"
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Project Files
              </Disclosure.Button>
            </div>
            {/* <MobileMenuOptions /> */}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
