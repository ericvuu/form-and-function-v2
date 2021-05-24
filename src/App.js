import React, {useEffect} from "react";
import Banner from "./Components/Banner";
import Cases from "./Components/Cases";
import Header from "./Components/Header";
import "./Styles/App.scss";

function App() {

  useEffect(() => {
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Cases/>
    </div>
  );
}

export default App;
