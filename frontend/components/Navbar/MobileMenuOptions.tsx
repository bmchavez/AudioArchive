/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

function MobileMenuOptions() {
  return (
    <>
      <div className="pt-4 pb-3 border-t border-gray-200">
        <div className="flex items-center px-4">
          <div className="flex-shrink-0">
            <img
              className="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-gray-800">Tom Cook</div>
            <div className="text-sm font-medium text-gray-500">
              tom@example.com
            </div>
          </div>
          <button
            type="button"
            className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFA60C] focus:ring-offset-2"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 space-y-1">
          <Disclosure.Button
            as="a"
            href="#"
            className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
          >
            Your Profile
          </Disclosure.Button>
          <Disclosure.Button
            as="a"
            href="#"
            className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
          >
            Settings
          </Disclosure.Button>
          <Disclosure.Button
            as="a"
            href="#"
            className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
          >
            Sign out
          </Disclosure.Button>
        </div>
      </div>
    </>
  );
}

export default MobileMenuOptions;
