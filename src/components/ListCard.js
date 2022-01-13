import Modal from './Modal';

function ListCard({
  mission_name,
  links,
  rocket,
  launch_date_local,
  launch_site,
}) {
  return (
    <div key={mission_name} className='claymorphism rounded-lg'>
      {links.flickr_images.length ? (
        <img
          src={links.flickr_images[0]}
          alt={rocket.rocket_name}
          className='w-auto rounded-t-lg aspect-[2/2]'
        />
      ) : (
        <img
          className='w-auto aspect-[2/2]'
          src={links.mission_patch}
          alt={mission_name}
        />
      )}
      <div className='px-3 py-6'>
        <p className='text-2xl truncate' title={mission_name}>
          {mission_name}
        </p>
        <p className='text-xs'>Launch date: {launch_date_local.slice(0, 10)}</p>
        <p>Launch site: {launch_site.site_name_long}</p>
        <p>Rocket name: {rocket.rocket_name}</p>
        <Modal
          mission_name={mission_name}
          rocket={rocket}
          links={links}
          launch_date_local={launch_date_local}
        />
      </div>
    </div>
  );
}

export default ListCard;
