import logo from './logo.svg';
import './App.css';
//import react from 'react';
import axios from 'axios';
import Weatherlist from './weather';


function App() {
  return (    
    <div >
      <h1>Labtest 2</h1>
      <Weatherlist/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
