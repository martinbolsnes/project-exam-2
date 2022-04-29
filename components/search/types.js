import TypesHotelIcon from '../icons/typesIcons/hotel';
import TypesHouseIcon from '../icons/typesIcons/house';
import TypesHostelIcon from '../icons/typesIcons/hostel';
import TypesOutdoorsIcon from '../icons/typesIcons/outdoors';

export default function Types() {
  return (
    <div className='flex w-full justify-between'>
      <TypesHotelIcon />
      <TypesHouseIcon />
      <TypesHostelIcon />
      <TypesOutdoorsIcon />
    </div>
  );
}
