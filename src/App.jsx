import { useState } from "react";
import "./App.css";
import Joke from "./components/Joke";
import Reddit from "./components/Reddit";

function App() {
  const [redditVisible, setRedditVisible] = useState(false);
  const [jokeVisible, setJokeVisible] = useState(false);

  return (
    <div>
      <div className="buttons">
        <button
          onClick={() => setRedditVisible(prevRedditVisible => !redditVisible)}
        >
          Toggle Reddit
        </button>
        <button onClick={() => setJokeVisible(prevJokeVisible => !jokeVisible)}>
          Toggle Joke
        </button>
      </div>
      {redditVisible && <Reddit />}
      {jokeVisible && <Joke />}
    </div>
  );
}

export default App;
