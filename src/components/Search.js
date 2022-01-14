import { useState, useEffect } from 'react';
import ListCard from './ListCard';
import SearchInput from './SearchInput';

function Search({ data }) {
  const [launches, setLaunches] = useState([]);
  const [noResults, setNoResults] = useState('');

  // Initialise data
  useEffect(() => {
    if (data) {
      setLaunches(data.shipsResult.data);
    }
  }, [data]);

  // Filter by name, type or mission
  const applyFilter = (e) => {
    e.preventDefault();
    const filteredSearch = data.shipsResult.data.filter(
      ({ name, type, missions }) =>
        name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        type.toLowerCase().includes(e.target.value.toLowerCase()) ||
        missions.some(({ name }) =>
          name.toLowerCase().includes(e.target.value.toLowerCase()),
        ),
    );

    if (!filteredSearch.length) {
      setNoResults('No results match your search, have another go!🚀');
    }
    setLaunches(filteredSearch);
  };

  return (
    <>
      <header className='w-full fixed shadow-lg p-2 bg-white'>
        <div className='max-w-6xl mx-auto flex'>
          <a className='text-4xl' href='/' title="Harvey's Spaceships">
            {'🚀' || 'HS'}
          </a>

          <SearchInput applyFilter={applyFilter} />
        </div>
      </header>

      <main className='grid grid-cols-2 max-w-6xl mx-auto sm:mx-2 md:mx-3 lg:mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7 pt-24'>
        {launches.length ? (
          launches.map((ship) => <ListCard key={ship.name} ship={ship} />)
        ) : (
          <div className='w-full'>
            <h1 className='text-3xl'>{noResults}</h1>
          </div>
        )}
      </main>
      <footer className='w-full h-20 mt-5 flex flex-row justify-center items-center left-0 right-0 bottom-0'>
        <a
          href='https://murmurache.dev'
          target='_blank'
          rel='noopener noreferrer'
        >
          Lucian Murmurache
        </a>
      </footer>
    </>
  );
}

export default Search;
