export default function GuestInput() {
  return (
    <div className='w-full flex flex-col pl-4 py-2 border border-solid border-black rounded-xl border-opacity-50'>
      <label htmlFor='guestInput' className='font-serif2 font-bold'>
        Guests
      </label>
      <select name='guests' id='guestInput' className='w-1/5'>
        <option value='1' className='font-serif'>
          1 guest
        </option>
        <option value='2' className='font-serif'>
          2 guests
        </option>
        <option value='3' className='font-serif'>
          3 guests
        </option>
        <option value='4' className='font-serif'>
          4 guests
        </option>
        <option value='5' className='font-serif'>
          5 guests
        </option>
        <option value='6' className='font-serif'>
          6 guests
        </option>
        <option value='7' className='font-serif'>
          7 guests
        </option>
      </select>
    </div>
  );
}
