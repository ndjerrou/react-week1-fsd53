import NavBar from './components/NavBar';

const App = ({ name, aBool, anArray, age }) => {
  return (
    <div>
      <NavBar name={name} />
      <p>{name}</p>
      <p>Age: {age}</p>
      <p>Bool: {aBool}</p>

      <ul>
        {anArray.map(({ content, tag }) => (
          <li key={content}>
            {tag} - {content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
