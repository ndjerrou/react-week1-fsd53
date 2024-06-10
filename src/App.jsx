import NavBar from './components/NavBar';

const App = props => {
  // ??
  console.log(props);

  return (
    <div>
      <NavBar name={props.name} />
      <p>{props.name}</p>
      <p>Age: {props.age}</p>
      <p>Bool: {props.aBool}</p>
    </div>
  );
};

export default App;
