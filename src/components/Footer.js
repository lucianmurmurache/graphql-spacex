import { Github, Briefcase } from '../icons/index';
function Footer() {
    return (
        <footer className='flex flex-wrap items-center justify-between p-3 mx-auto mt-5'>
            <div className='container mx-auto flex flex-col flex-wrap items-center justify-between'>
                <ul className='flex mx-auto text-center'>
                    <li className='p-2 cursor-pointer'>
                        <a
                            href='https://github.com/lucianmurmurache'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <Github />
                        </a>
                    </li>
                    <li className='p-2 cursor-pointer'>
                        <a
                            href='https://murmurache.dev'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <Briefcase />
                        </a>
                    </li>
                </ul>
                <div className='flex mx-auto text-center'>
                    Lucian Murmurache © 2022
                </div>
            </div>
        </footer>
    );
}

export default Footer;
