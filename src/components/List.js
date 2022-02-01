import { ListCard } from './index';

function List({ ships, noResults }) {
    return (
        <>
            <main className=' relative grid grid-cols-2 max-w-6xl mx-auto sm:mx-2 md:mx-3 lg:mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7 pt-24'>
                {ships.length ? (
                    ships.map((ship) => (
                        <ListCard key={ship.name} ship={ship} />
                    ))
                ) : (
                    <div className='w-full absolute top-44'>
                        <h1 className='text-3xl'>{noResults}</h1>
                    </div>
                )}
            </main>
        </>
    );
}

export default List;
