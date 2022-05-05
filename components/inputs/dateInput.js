import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function onChangeDate(date, dateString) {
  console.log(date, dateString);
}

export default function DateSelect(props) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className='w-1/2 flex flex-col border border-solid border-black rounded-xl border-opacity-50 cursor-pointer py-4 pr-4 pl-4'>
      <label htmlFor='tripDate' className='font-serif2 font-bold'>
        {props.name}
      </label>
      <DatePicker
        id='tripdate'
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className='cursor-pointer w-full'
      />
    </div>
  );
}
