import './App.css';
import React from 'react';
import Title from './Components/Title';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Resources from './Components/Resources';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chart from './Components/Chart';
import PresentChart from './Components/PresentChart';

function App() {
  return (
    <Router>
      <div>
        <Title />
        <Nav />
        <Home/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/calculation" element={<Chart />} />
          <Route path="/chart" element={<PresentChart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
