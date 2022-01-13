import { useState, useRef } from 'react';
import { useOnCloseModal } from '../hooks/useOnCloseModal';

function Modal({ mission_name, rocket, links, launch_date_local }) {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef();

  // Handle Esc and click outside modal
  useOnCloseModal(ref, () => setShowModal(false));

  return (
    <>
      <button
        className='text-blue hover:text-black'
        type='button'
        aria-label='Open modal with more information'
        onClick={() => setShowModal(true)}
      >
        More details
      </button>
      {showModal ? (
        <>
          <div
            className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed 
                       inset-0 z-20 outline-none focus:outline-none no-scrollbar'
          >
            <div className='relative w-auto my-6 mx-auto max-w-3xl' ref={ref}>
              {/*content*/}
              <div className='rounded-lg relative flex flex-col w-full bg-white claymorphism'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid rounded-t'>
                  <h3 className='text-3xl font-semibold'>{mission_name}</h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 float-right'
                    aria-label='Close modal'
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  <a
                    href={links.video_link}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Access video footage in a new tab'
                    className='text-blue hover:text-black my-4 text-lg leading-relaxed'
                  >
                    Launch video
                  </a>
                  <p className='my-4 text-lg leading-relaxed'>
                    Rocket name: {rocket.rocket_name}
                    <span
                      title={`${rocket.rocket.active ? 'Active' : 'Inactive'}`}
                    >
                      {rocket.rocket.active ? ' 🟢' : ' 🔴'}
                    </span>
                  </p>
                  <p className='my-4 text-lg leading-relaxed'>
                    {rocket.rocket.description}
                  </p>
                  <p className='my-4 text-lg leading-relaxed'>
                    Rocket type: {rocket.rocket_type}
                  </p>
                  <div className='grid grid-cols-4 gap-2 max-h-60 overflow-y-scroll overflow-x-hidden scrollbar'>
                    {links.flickr_images.length
                      ? links.flickr_images.map((image) => {
                          return (
                            <img
                              key={image}
                              className='w-full h-auto rounded shadow'
                              src={image}
                              alt='Rocket img'
                              title={rocket.rocket_name}
                            />
                          );
                        })
                      : null}
                  </div>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid rounded-b'>
                  <button
                    className='py-2 px-7 mx-2 my-3 bg-blue text-white rounded text shadow'
                    aria-label='Close modal'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-75 fixed inset-0 z-10 bg-black'></div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
