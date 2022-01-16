import { useState, useEffect } from 'react';
import { List, SearchInput } from './index';

function Search({ data }) {
    const [ships, setShips] = useState([]);
    const [noResults, setNoResults] = useState('');

    const shipData = data.shipsResult.data;

    // Initialise data
    useEffect(() => {
        if (shipData) {
            setShips(shipData);
        }
    }, [shipData]);

    // Filter by name, type or mission
    const applyFilter = (e) => {
        e.preventDefault();
        const filteredSearch = shipData.filter(
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
            <header className='w-full fixed shadow-lg p-2 bg-white z-20'>
                <div className='max-w-6xl mx-auto flex items-center'>
                    <a
                        className='text-5xl pb-2'
                        href='/'
                        title="Harvey's Spaceships"
                        aria-label='Reload page or home page'>
                        {'🚀' || 'HS'}
                    </a>
                    <SearchInput applyFilter={applyFilter} />
                </div>
            </header>
            <List ships={ships} noResults={noResults} />
        </>
    );
}

export default Search;
