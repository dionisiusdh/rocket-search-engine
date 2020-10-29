import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [title, setTitle] = useState(0);
  const [sim, setSimilarity] = useState(0);
  const [firstSentence, setFirstSentence] = useState("");

  useEffect(() => {
    fetch('/query').then(res => res.json()).then(data => {
      console.log(data)
      setTitle(data.data_1.title);
      setSimilarity(data.data_1.sim);
      setFirstSentence(data.data_1.first_sentence);
    });
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <form action="#" method="get">
          <p>Query: </p>
          <p><input type="text" name="que"/></p>
          <p><input type="submit" value="submit"/></p>
        </form>
        <p>{title}.</p>
        <p>Sim: {sim}</p>
        <p>{firstSentence}</p>
      </header>
    </div>
  );
}

export default App;
