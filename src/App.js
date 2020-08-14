import React from "react";
import "./App.css";
import SingleProjectTemplate from "./Components/FirstPage/SingleProjectTemplate";
import SecondPage from "./Components/SecondPage/SecondPage";
import ThirdPage from "./Components/ThirdPage/ThirdPage";
import ContactLinks from "./Components/Contact/ContactLinks";
import ContatcPage from "./Components/Contact/ContactPage";


// Sentence . asdasd.()
function App() {
  return (
    <div
      className="App"
      style={{
        justifyContent: "center",
        display: "flex",
        width: "100vw",
        height: "100vh",
        flexWrap: "wrap",
      }}
    >
      <SingleProjectTemplate />
      <SecondPage />
      <ThirdPage />
      <ContatcPage />
    </div>
  );
}

export default App;
