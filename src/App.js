import React from 'react';
import logo from './logo.svg';
import './App.css';
import SingleProjectTemplate from "./Components/SingleProjectTemplate";
import ProjectsPage from "./Components/SecondPage/ProjectsPage";
function App() {
  return (
    <div className="App" style={{justifyContent:"center",display:"flex", width:"100vw",height:"100vh",flexWrap:"wrap"}}>
    <SingleProjectTemplate />
    <ProjectsPage/>
    {/*<SingleProjectTemplate/>*/}

    </div>
  );
}

export default App;
