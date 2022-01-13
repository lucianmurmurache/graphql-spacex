import { useState, useEffect } from 'react';
import ListCard from './ListCard';
import SearchInput from './SearchInput';

function Search({ data }) {
  const [launches, setLaunches] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState('');

  // Initialise data
  useEffect(() => {
    if (data) {
      setLaunches(data.launchesPast);
    }
  }, [data]);

  // Filter by name, rocket or mission
  const applyFilter = (e) => {
    e.preventDefault();
    const filteredSearch = data.launchesPast.filter(
      (launch) =>
        launch.rocket.rocket_name
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        launch.rocket.rocket_type
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        launch.mission_name.toLowerCase().includes(searchQuery.toLowerCase()),
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

          <SearchInput
            applyFilter={applyFilter}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </header>

      <main className='grid grid-cols-2 max-w-6xl mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 pt-24'>
        {launches.length ? (
          launches.map(
            ({
              launch_year,
              mission_name,
              launch_date_local,
              launch_site,
              rocket,
              links,
            }) =>
              launch_year > '2011' && (
                <ListCard
                  key={mission_name}
                  mission_name={mission_name}
                  launch_date_local={launch_date_local}
                  launch_site={launch_site}
                  rocket={rocket}
                  links={links}
                />
              ),
          )
        ) : (
          <div className='w-full'>
            <h1 className='text-3xl'>{noResults}</h1>
          </div>
        )}
      </main>
      <footer className='w-full h-20 mt-5 flex flex-row justify-center items-center'>
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
