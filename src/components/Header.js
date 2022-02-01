import { SearchInput } from './index';

function Header({ applyFilter }) {
    return (
        <header className='w-full fixed shadow-lg p-2 bg-white z-20'>
            <div className='max-w-6xl mx-auto flex items-center'>
                <a
                    className='text-5xl pb-2'
                    href='/'
                    title="Harvey's Spaceships"
                    aria-label='Home page'>
                    {'🚀' || 'HS'}
                </a>
                <SearchInput applyFilter={applyFilter} />
            </div>
        </header>
    );
}

export default Header;
