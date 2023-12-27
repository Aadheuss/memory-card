import { useState, useEffect } from "react";
import "./App.css";
import CardContainer from "./components/card-container";
import memoryCardDataList from "./components/memory-card-data";
import shuffleArr from "./components/fisher-yates-shuffle";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedList, setSelectedList] = useState([]);

  const shuffledArr = shuffleArr(memoryCardDataList);

  function reduceArrToLength(arr, length) {
    const reducedArr = [];

    if (reducedArr.length < length) {
      for (let i = 0; i < length; i++) {
        reducedArr.push(arr[i]);
      }
    }

    return reducedArr;
  }

  const reducedArr = reduceArrToLength([...shuffledArr], 9);

  function handleOnClickSelectedList(name) {
    const notSelected = selectedList.every((item) => item !== name);
    if (notSelected) {
      setSelectedList([...selectedList, name]);
      setCurrentScore(currentScore + 1);
    } else {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
      setSelectedList([]);
    }
  }

  return (
    <>
      <header>
        <h1>Memory Cards</h1>
      </header>
      <main>
        <div className="scoreboard">
          <div>current score: {currentScore}</div>
          <div>best score: {bestScore}</div>
        </div>
        <p>Don&lsquo;t Click on the same image twice!</p>
        {
          <CardContainer
            cardList={reducedArr}
            onClick={handleOnClickSelectedList}
          />
        }
      </main>
    </>
  );
}

export default App;
