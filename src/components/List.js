import { ListCard } from './index';

function List({ ships, noResults }) {
  return (
    <>
      {ships.length ? (
        ships.map((ship) => <ListCard key={ship.name} ship={ship} />)
      ) : (
        <div className='w-full'>
          <h1 className='text-3xl'>{noResults}</h1>
        </div>
      )}
    </>
  );
}

export default List;
