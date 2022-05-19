import Scores from "./components/Scores";
import Cards from "./components/Cards";
import React, { useState } from "react";
import "./styles/style.css"

const App = () => {
  const [score, setScore]  = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="container">
      <Scores score={score} bestScore={bestScore}/>
      <Cards score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore}/>
    </div>
  );
};

export default App;