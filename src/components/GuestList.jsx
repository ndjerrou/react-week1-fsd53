import { useState, useRef } from 'react';

import clsx from 'clsx';
import { toast } from 'sonner';
import { TiDelete } from 'react-icons/ti';

import './GuestList.css';

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

  const deleteGuest = guest => {
    console.log('A supprimer : ', guest);

    // const filteredGuests = guests.filter(el => el !== guest);

    const filteredGuests = guests.filter(el => {
      // lors du parcours de nos éléments

      // SI el === guest à supprimer ==> pas de conservation dans l'output

      // sinon oui

      el === guest; // pas de conservation ==> return false

      return el !== guest;
    });

    console.log('FilteredGuests = ', filteredGuests);

    setGuests(filteredGuests);

    toast.error('Invité supprimé !');
  };

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
            <div
              key={guest + Math.random()}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <li className={printBgColor(idx)}>{guest}</li>
              <TiDelete color='red' onClick={() => deleteGuest(guest)} />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default GuestList;
