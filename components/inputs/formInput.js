export default function FormInput(props) {
  return (
    <div className='pt-4'>
      <input
        type='search'
        placeholder={props.type}
        className='w-full font-serif border border-solid border-black border-opacity-50 h-12 rounded lg:rounded-md pl-4'
      ></input>
    </div>
  );
}
