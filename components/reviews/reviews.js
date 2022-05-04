import { Star, ChevronRight } from 'tabler-icons-react';

export default function Reviews() {
  return (
    <div>
      <div className='flex'>
        <Star size={30} color='#ead200' fill='#ead200' />
        <Star size={30} color='#ead200' fill='#ead200' />
        <Star size={30} color='#ead200' fill='#ead200' />
        <Star size={30} color='#ead200' fill='#ead200' />
        <Star size={30} color='#ead200' fill='#ead200' />
      </div>
      <div className='flex mt-2 items-center opacity-50'>
        <h3>1.5k Reviews</h3>
        <ChevronRight />
      </div>
    </div>
  );
}
