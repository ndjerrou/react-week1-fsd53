import ReactDOM from 'react-dom/client';

const isMajor = false;
const balance = 100;

const jsx = (
  <div id='container'>
    <p>Un paragraphe</p>
    <p>{'une string'}</p>
    {2}
    <p>{true}</p>
    <p>{false}</p>
    {/* <p>
      {{
        student: true,
        age: 17,
      }}
    </p> */}
    <p>{[<p>P1</p>, <p>P2</p>, 'kikoo']}</p>
    {/* Ex: display efficiently a navbar with 3 elements inside the navigation menu */}
    <nav>
      <ul>
        <li>Menu Item</li>
        <li>Menu Item</li>
        <li>Menu Item</li>
      </ul>
    </nav>
    {/* Display efficiently this navbar using an array */}
    {/* <ul>{[<li>Menu Item</li>, <li>Menu Item</li>, <li>Menu Item</li>]}</ul>  */}

    <ul>
      {['menu item', 'menu item', 'menu item'].map(menuItem => (
        <li key={menuItem + Math.random()}>{menuItem}</li>
      ))}
    </ul>

    {/* Conditionnal jsx */}

    {isMajor ? (
      <p style={{ color: 'purple' }}>Congrats, tu peux passer ton permis ! </p>
    ) : (
      <p style={{ backgroundColor: 'red' }}>Failure ! Tu es trop jeune snif</p>
    )}

    {balance >= 100 && <h3>Clique ici pour retirer ton argent</h3>}
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(jsx);

// JSX - Javascript XML
