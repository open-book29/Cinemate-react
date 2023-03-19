import React from 'react'
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch'
import Cards from '../components/Cards';
import useTitle from '../hooks/useTitle';


export default function Search({apiPath}) {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  useTitle(`Search result for ${queryTerm}`);

  const {data: movies} = useFetch(apiPath, queryTerm);
  return (
    <main>
      <section>
      <p className="text-3xl text-gray-700 dark:text-white">{ movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'` }</p>
      </section>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
          {movies.map((movie) => (
            <Cards key={movie.id} movie={movie} />
          ))}
        </div>
      </section> 
    </main>
  )
}
