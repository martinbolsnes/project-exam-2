import { Search } from 'tabler-icons-react';

export default function SearchButton() {
  return (
    <div className='rounded-md shadow ml-2'>
      <div className='flex items-center py-2 px-4 justify-center text-base font-medium font-serif2 rounded-md text-white bg-darkBlue hover:bg-darkBlue '>
        <Search />
      </div>
    </div>
  );
}
