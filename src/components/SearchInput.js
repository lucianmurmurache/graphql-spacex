function SearchInput({ applyFilter }) {
    return (
        <input
            className='search-input ml-auto border-2 border-blue bg-white h-10 px-3 pr-16 rounded-lg text-sm focus:outline-none focus-visible:ring-1'
            type='text'
            required
            name='search'
            placeholder='Search...'
            autoFocus
            onChange={applyFilter}
            title='Search by ship name, type or mission name'
            aria-label='Search by ship name, type or mission name'
        />
    );
}

export default SearchInput;
