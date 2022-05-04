import { MapPin } from 'tabler-icons-react';

export default function LocationLabel(props) {
  return (
    <div className='flex text-blue-5 mt-2'>
      <div>
        <MapPin />
      </div>
      <h3 className='ml-2'>{props.location}</h3>
    </div>
  );
}
