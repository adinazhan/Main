import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [factsAmount, setFactsAmount] = useState(5);

  const fetchData = async () => {
    const response = await fetch(
      `http://www.cbp-exercises.test/day25/workout25.php`
    );
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchData(factsAmount);
  }, []);

  return (
    <div className="app">
      <div className="controls">
        <button
          className="button"
          onClick={() => {
            fetchData(factsAmount);
          }}
        >
          Get new facts
        </button>

        <div className="input-wrapper">
          <label htmlFor="input">Amount of facts to get:</label>
          <input
            className="input"
            name="input"
            type="number"
            min={1}
            max={10}
            defaultValue={factsAmount}
            onChange={(e) => {
              setFactsAmount(e.target.value);
            }}
          />
        </div>
      </div>

      {!data ? (
        <p>LOADING...</p>
      ) : (
        <p>{data.fact}</p> // assumes that data is one fact object

        // this one assumes the data is array of fact objects
        // data.map((catFact, fact) => {
        //   return <p key={fact}>{catFact.fact}</p>;
        // })
      )}
    </div>
  );
}

export default App;
