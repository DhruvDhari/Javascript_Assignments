// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import {List} from './components/List'

function App() {

  const name="Dhruv";
  // const role="admin";
  // const time=Date(Date.now);
  return (
    <>
    <Greet name={name}/>
    <List/>
    {/* <h5>{role==='admin'?"Welcome Admin":"Welcome guest"}</h5>
    <h2>Hi React JS </h2> */}
    
    </>
  );
}

export default App;
