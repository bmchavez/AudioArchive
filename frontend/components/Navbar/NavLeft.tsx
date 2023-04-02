/* eslint-disable @next/next/no-img-element */
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Fragment } from 'react';

const NavLeft = () => {
  return (
    <>
      <div className="flex">
        <div className="flex items-center flex-shrink-0">
          <img
            className="block w-auto h-8 lg:hidden"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Audio Archive"
          />
          <img
            className="hidden w-auto h-8 lg:block"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Audio Archive"
          />
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
          {/* Current: "border-[#FFA60C] text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
          <a
            href="#"
            className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-[#FFA60C]"
          >
            Dashboard
          </a>
          <Link
            href="/project_files"
            className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
          >
            Project Files
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavLeft;
