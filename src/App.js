import React from 'react';
import logo from './logo.svg';
import './App.css';
import SingleProjectTemplate from "./Components/SingleProjectTemplate";
function App() {
  return (
    <div className="App" style={{justifyContent:"center",display:"flex", width:"100%",height:"100%",flexWrap:"wrap"}}>
    <SingleProjectTemplate />
    <SingleProjectTemplate/>

    </div>
  );
}

export default App;
