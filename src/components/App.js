import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Markets from '../pages/Markets'
import Coin from '../pages/Coin';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='markets' element={ <Markets /> } />
          <Route path='/coin' element={ <Coin /> }>
            <Route path=':coinId' element={ <Coin /> } />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
