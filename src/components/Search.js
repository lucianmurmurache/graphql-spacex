import { useState, useEffect } from 'react';
import { List, SearchInput } from './index';

function Search({ data }) {
  const [ships, setShips] = useState([]);
  const [noResults, setNoResults] = useState('');

  // Initialise data
  useEffect(() => {
    if (data) {
      setShips(data.shipsResult.data);
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
    setShips(filteredSearch);
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
        <List ships={ships} noResults={noResults} />
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
