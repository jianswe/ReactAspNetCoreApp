import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Trips } from './components/Trip/Trips'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trips" element={<Trips />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
