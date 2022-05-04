function onChangeDate(date, dateString) {
  console.log(date, dateString);
}

export default function DateSelect(props) {
  return (
    <div className='flex flex-col border-solid border border-black rounded-lg py-4 pr-48 pl-4'>
      <label htmlFor='tripDate' className='font-serif2 font-bold'>
        {props.name}
      </label>
      <input
        className='font-serif'
        type='date'
        id='tripDate'
        value='2022-06-10'
        min='2022-06-10'
        max='2023-06-10'
        onChange={onChangeDate}
      ></input>
    </div>
  );
}
