import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Markets from '../pages/Markets'
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='markets' element={ <Markets /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
