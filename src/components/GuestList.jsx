import { useState } from 'react';

function GuestList() {
  const [name, setName] = useState('');
  return (
    <>
      <h1>Guests list</h1>
      <label>Name : </label>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button>Add a guest</button>
    </>
  );
}

export default GuestList;

{
  /* <form>
  <input />
</form>; */
}

// document.querySelector('form').addEventListener('submit', e => {
//     //processing...

//     const name = document.querySelector('input#name').value
// })
