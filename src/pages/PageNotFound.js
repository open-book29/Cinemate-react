import React from 'react'
import { Link } from 'react-router-dom'
import PageNotFoundImage from "../assets/images/pagenotfound.png"
import { useEffect } from 'react';

export default function PageNotFound() {
  useEffect(() => {
    document.title = `Page Not Found / Cinemate`;
  });
  
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404, Oops!</p>
          <div className='max-w-lg'>
            <img className='rounded' src={PageNotFoundImage} alt="" />
          </div>
        </div>
        <div className='flex justify-center my-4'>
          <Link to="/">
          <button className='w-64 text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-2.5 font-medium'>Back to Home</button>
          </Link>
        </div>

      </section>
    </main>
  )
}
