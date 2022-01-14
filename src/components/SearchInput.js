function SearchInput({ applyFilter }) {
  return (
    <input
      className='ml-auto border-2 border-blue bg-white h-10 px-3 pr-16 rounded-lg text-sm focus:outline-none focus-visible:ring-1'
      type='text'
      required
      name='search'
      placeholder='Search...'
      onChange={applyFilter}
    />
  );
}

export default SearchInput;
