import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent.js';
import Name from './Name';
import FunFact from './FunFact';
import ThingsILike from './ThingsILike.js';
import Top5Movies from './Top5Movies';
//created components are imported as jsx elements, effectively html elements

//const x = 4;
//almost always declare variables in React with const
function App() {
  return (
    <div className="App">
      <MyComponent />
      <Name customName="Sawyer"/>
      <FunFact />
      <ThingsILike />
      <Top5Movies/>
      
    </div>
  );
}

export default App;
