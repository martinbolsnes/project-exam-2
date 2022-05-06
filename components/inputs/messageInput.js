export default function MessageInput(props) {
  return (
    <div className='pt-4'>
      <textarea
        type='search'
        placeholder={props.type}
        className='w-full border border-solid border-black border-opacity-50 h-20 rounded-lg pl-4'
      ></textarea>
    </div>
  );
}
