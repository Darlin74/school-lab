import React from 'react';
import Navbar from './components/Navbar.js';
 import SchoolCard from './components/SchoolCard.js';
 import data from './nycSchoolEnrollmentData.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">
        <SchoolCard name={data[0]}/>
        <SchoolCard name={data[1]}/>
        <SchoolCard name={data[2]}/>
        <SchoolCard name={data[3]}/>
        <SchoolCard name={data[4]}/>
        <SchoolCard name={data[5]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
