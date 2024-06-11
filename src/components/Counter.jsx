// hook useState
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(10);

  const increment = () => {
    setCount(count + 1); // asynchronous stuff
    console.log(count + ' inside increment cb');
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const incrementByThree = () => {
    setCount(count + 3);
  };
  // Ex

  //  3 - Add a button to increment by +3

  console.log(count);
  return (
    <>
      <h1>Counter</h1>
      {count}
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={incrementByThree}>+3</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
}

export default Counter;
