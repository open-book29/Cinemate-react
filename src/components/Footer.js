import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <footer className=" bg-white shadow dark:bg-gray-800">
        <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Flowbite™</Link>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link to="/" rel='noreferrer' className="mr-4 hover:underline md:mr-6 ">About</Link>
            </li>
            <li>
              <Link to="/" rel='noreferrer' className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/"rel='noreferrer' className="mr-4 hover:underline md:mr-6">Licensing</Link>
            </li>
            <li>
              <Link to="/" rel='noreferrer' className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
      </footer>
    </footer>
  )
}
