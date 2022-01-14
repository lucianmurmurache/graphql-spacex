import Modal from './Modal';
import { ShieldCheck, ShieldExclamation } from '../icons/index';

function ListCard({ ship }) {
  const backupImage =
    'https://img2.cgtrader.com/items/2798138/20d8e46570/large/toy-boat-3d-model-obj-fbx-blend.jpg';
  const { image, name, active, missions } = ship;
  return (
    <div key={name} className='claymorphism rounded-lg'>
      {ship.image ? (
        <img
          src={image}
          alt={name}
          title={name}
          className='w-auto rounded-t-lg aspect-[2/2]'
        />
      ) : (
        <img
          src={backupImage}
          alt={name}
          title='Not actual image'
          className='w-auto rounded-t-lg aspect-[2/2]'
        />
      )}
      <div className='px-3 py-5'>
        <p className='text-2xl truncate' title={name}>
          {name}
        </p>
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
        <p className='my-2'>Total number of missions: {missions.length}</p>
        <Modal ship={ship} />
      </div>
    </div>
  );
}

export default ListCard;
