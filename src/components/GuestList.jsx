import { useState, useRef } from 'react';

import clsx from 'clsx';

import './GuestList.css';

import { toast } from 'sonner';

function GuestList() {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState([]);

  const inputRef = useRef(null);

  const addGuest = () => {
    setGuests(prevState => [...prevState, name]);

    setName('');

    inputRef.current.focus();

    toast.success('Invité admis à la soirée');
  };

  const printBgColor = idx => clsx('name__item', idx % 2 && 'color');

  return (
    <>
      <h1>Guests list</h1>
      <label>Name : </label>
      <input
        ref={inputRef}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={addGuest} disabled={name.length <= 3}>
        Add a guest
      </button>

      <div>
        <ul>
          {guests.map((guest, idx) => (
            <li className={printBgColor(idx)} key={guest + Math.random()}>
              {guest}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default GuestList;
