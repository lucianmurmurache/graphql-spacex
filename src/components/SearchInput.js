function SearchInput({ applyFilter, setSearchQuery }) {
  return (
    <form className='pt-2 relative ml-auto' onSubmit={applyFilter}>
      <input
        className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none focus-visible:ring-1'
        type='text'
        required
        name='search'
        placeholder='Search..'
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        type='submit'
        aria-label='Submit search query'
        className='absolute right-0 top-0 mt-4 mr-2'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-7 w-7'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </button>
    </form>
  );
}

export default SearchInput;
