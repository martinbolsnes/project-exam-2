export default function FormInput(props) {
  return (
    <div className='pt-4'>
      <input
        type='search'
        placeholder={props.type}
        className='w-full border border-solid border-black border-opacity-50 h-12 rounded-lg pl-4'
      ></input>
    </div>
  );
}
