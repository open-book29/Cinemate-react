// import React, {useEffect, useState } from 'react'
import Cards from '../components/Cards'
import useFetch from '../hooks/useFetch';
import useTitle from '../hooks/useTitle';

export default function MovieList({apiPath, title}) {
  const {data: movies } = useFetch(apiPath);
  useTitle(title);
  

  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap other:justify-evenly'>
          {movies.map((movie) => (
            <Cards key={movie.id} movie={movie} />
          ))}
        </div>
      </section>  
    </main>
  )
}
