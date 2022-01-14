import { useState, useRef } from 'react';
import { useOnCloseModal } from '../hooks/useOnCloseModal';
import { CloseButton } from '../icons/index';

function Modal({ ship }) {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef();

  // Handle Esc and click outside modal
  useOnCloseModal(ref, () => setShowModal(false));

  const backupImage =
    'https://img2.cgtrader.com/items/2798138/20d8e46570/large/toy-boat-3d-model-obj-fbx-blend.jpg';

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
                <div className='flex items-start justify-between p-4 border-b border-solid border-gray rounded-t'>
                  <h3 className='text-2xl'>{ship.name}</h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 float-right text-blue'
                    aria-label='Close modal'
                    onClick={() => setShowModal(false)}
                  >
                    <CloseButton />
                  </button>
                </div>
                {/*body*/}
                <div className='relative p-6 sm:p-4 flex-auto'>
                  {ship.image ? (
                    <img
                      className='w-auto rounded-lg shadow-lg max-w-lg'
                      src={ship.image}
                      title={ship.name}
                      alt={ship.name}
                    />
                  ) : (
                    <img
                      className='w-auto rounded-lg shadow-lg max-w-lg max-h-96'
                      src={backupImage}
                      alt={ship.name}
                      title='Not actual image'
                    />
                  )}

                  <p className='my-2 leading-relaxed'>
                    Year built: {ship.year_built}
                  </p>
                  <p className='my-2 leading-relaxed'>Type: {ship.type}</p>
                  {ship.model ? (
                    <p className='my-2 leading-relaxed'>Model: {ship.model}</p>
                  ) : null}
                  {ship.successful_landings ? (
                    <p className='my-2 leading-relaxed'>
                      Successful landings: {ship.successful_landings}
                    </p>
                  ) : null}
                  {}
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-5 border-t border-solid border-gray rounded-b'>
                  <button
                    className='py-2 px-7 bg-blue text-white rounded text shadow'
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
