import Scores from "./components/Scores";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import React, { useState } from "react";
import "./styles/style.css"

const App = () => {
  let initialBestScore = (window.localStorage.getItem("bestScore") === null ? 0 : window.localStorage.getItem("bestScore"));
  const [score, setScore]  = useState(0);
  const [bestScore, setBestScore] = useState(initialBestScore);

  return (
    <div className="container">
      <Header/>
      <Scores score={score} bestScore={bestScore}/>
      <Instructions/>
      <Cards score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore}/>
    </div>
  );
};

export default App;