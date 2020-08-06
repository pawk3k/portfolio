import React from 'react';
import './App.css';
import SingleProjectTemplate from "./Components/FirstPage/SingleProjectTemplate";
import SecondPage from "./Components/SecondPage/SecondPage";
import ThirdPage from "./Components/ThirdPage/ThirdPage";
function App() {
  return (
    <div className="App" style={{justifyContent:"center",display:"flex", width:"100vw",height:"100vh",flexWrap:"wrap"}}>
      <SingleProjectTemplate />
      <SecondPage/>
      <ThirdPage/>
    </div>
  );
}

export default App;
