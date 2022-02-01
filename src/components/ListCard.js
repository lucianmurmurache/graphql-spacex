import { useState } from 'react';
import { Modal } from './index';
import { ShieldCheck, ShieldExclamation, Heart } from '../icons/index';

function ListCard({ ship }) {
    const [isSelected, setIsSelected] = useState(false);
    const onSelected = () => setIsSelected(!isSelected);

    const { image, name, active, missions } = ship;

    const missionsList = missions.map((mission) => (
        <li className='pb-1' key={mission.name}>
            {mission.name}
        </li>
    ));

    const backupImage =
        'https://img2.cgtrader.com/items/2798138/20d8e46570/large/toy-boat-3d-model-obj-fbx-blend.jpg';

    return (
        <div key={name} className='claymorphism rounded-lg'>
            {image ? (
                <img
                    src={image}
                    alt={name}
                    title={name}
                    draggable='false'
                    className='w-auto rounded-t-lg aspect-[2/2]'
                />
            ) : (
                <img
                    src={backupImage}
                    alt={name}
                    title='Not actual image'
                    draggable='false'
                    className='w-auto rounded-t-lg aspect-[2/2]'
                />
            )}
            <div className='px-3 py-5'>
                <div className='flex'>
                    <p className='text-2xl truncate' title={name}>
                        {name}
                    </p>
                    <a
                        href='#favList'
                        title={`${
                            isSelected ? 'Remove from' : 'Add to'
                        } favourites`}
                        aria-label={`${
                            isSelected ? 'Remove from' : 'Add to'
                        } favourites`}
                        className='ml-auto pr-3 tap-highlight-transparent'
                        onClick={onSelected}>
                        <span className='text-blue will-change-auto'>
                            <Heart isSelected={isSelected} />
                        </span>
                    </a>
                </div>

                <p className='my-2' title={`${active ? 'Active' : 'Inactive'}`}>
                    {active ? (
                        <span className='flex'>
                            <ShieldCheck />
                            &nbsp;Active
                        </span>
                    ) : (
                        <span className='flex'>
                            <ShieldExclamation />
                            &nbsp;Inactive
                        </span>
                    )}
                </p>

                <p className='my-2'>
                    Total number of missions: {missions.length}
                </p>
                <Modal ship={ship} missionsList={missionsList} />
            </div>
        </div>
    );
}

export default ListCard;
