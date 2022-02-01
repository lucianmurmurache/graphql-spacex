import { useState, useEffect } from 'react';
import { Header, List, Footer } from './index';

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
            <Header applyFilter={applyFilter} />
            <List ships={ships} noResults={noResults} />
            <Footer />
        </>
    );
}

export default Search;
