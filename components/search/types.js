import TypesHotelIcon from '../icons/typesIcons/hotel';
import TypesHouseIcon from '../icons/typesIcons/house';
import TypesHostelIcon from '../icons/typesIcons/hostel';
import TypesOutdoorsIcon from '../icons/typesIcons/outdoors';

export default function Types() {
  return (
    <div className='flex lg:w-1/4 md:w-1/3 w-4/5 justify-between'>
      <TypesHotelIcon />
      <TypesHouseIcon />
      <TypesHostelIcon />
      <TypesOutdoorsIcon />
    </div>
  );
}
