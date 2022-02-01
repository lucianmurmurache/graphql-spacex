import { useState, useRef } from 'react';
import { useOnCloseModal } from '../hooks/useOnCloseModal';
import { CloseButton } from '../icons/index';

function Modal({ ship, missionsList }) {
    const [showModal, setShowModal] = useState(false);
    const ref = useRef();

    // Handle Esc and click outside modal
    useOnCloseModal(ref, () => setShowModal(false));

    const { name, image, type, model, year_built, successful_landings } = ship;

    const backupImage =
        'https://img2.cgtrader.com/items/2798138/20d8e46570/large/toy-boat-3d-model-obj-fbx-blend.jpg';

    return (
        <>
            <button
                className='text-blue hover:text-black'
                type='button'
                title='More details'
                aria-label='Open modal with more information'
                onClick={() => setShowModal(true)}>
                More details
            </button>
            {showModal ? (
                <>
                    <div
                        className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed 
                       inset-0 z-30 outline-none focus:outline-none no-scrollbar'>
                        <div
                            className='relative w-auto my-6 mx-auto max-w-xl sm:max-w-full md:max-w-2xl max-h-screen'
                            ref={ref}>
                            {/*content*/}
                            <div className='rounded-lg relative flex flex-col w-full bg-white claymorphism'>
                                {/*header*/}
                                <div className='flex items-start justify-between p-4 border-b border-solid border-gray rounded-t'>
                                    <h3 className='text-2xl'>{name}</h3>
                                    <button
                                        className='p-1 ml-auto bg-transparent border-0 float-right text-blue'
                                        aria-label='Close modal'
                                        onClick={() => setShowModal(false)}>
                                        <CloseButton />
                                    </button>
                                </div>
                                {/*body*/}
                                <div className='p-6 sm:p-4 md:p-6'>
                                    {image ? (
                                        <img
                                            className='w-auto rounded-lg shadow-lg max-w-full'
                                            draggable='false'
                                            src={image}
                                            title={name}
                                            alt={name}
                                        />
                                    ) : (
                                        <img
                                            className='w-auto rounded-lg shadow-lg max-w-lg max-h-96'
                                            draggable='false'
                                            src={backupImage}
                                            alt={name}
                                            title='Not actual image'
                                        />
                                    )}
                                    <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2'>
                                        <div>
                                            <p className='mb-2 mt-5'>
                                                Year built: {year_built}
                                            </p>
                                            <p className='my-2'>Type: {type}</p>
                                            {model ? (
                                                <p className='my-2'>
                                                    Model: {model}
                                                </p>
                                            ) : null}
                                            {successful_landings ? (
                                                <p className='my-2'>
                                                    Successful landings:{' '}
                                                    {successful_landings}
                                                </p>
                                            ) : null}
                                        </div>
                                        {missionsList.length ? (
                                            <div>
                                                <p className='mt-5 mb-3'>
                                                    Missions:
                                                </p>
                                                <ul className='list-disc max-h-40 sm:max-h-20 md:max-h-40 overflow-y-auto scrollbar pl-5'>
                                                    {missionsList}
                                                </ul>
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className='flex items-center justify-end p-4 border-t border-solid border-gray rounded-b'>
                                    <button
                                        className='py-2 px-7 bg-blue text-white rounded text shadow'
                                        aria-label='Close modal'
                                        type='button'
                                        onClick={() => setShowModal(false)}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='opacity-75 fixed inset-0 z-20 bg-black'></div>
                </>
            ) : null}
        </>
    );
}

export default Modal;
