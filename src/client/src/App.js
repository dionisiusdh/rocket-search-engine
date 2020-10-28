import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [title, setTitle] = useState(0);
  const [sim, setSimilarity] = useState(0);

  useEffect(() => {
    fetch('/query').then(res => res.json()).then(data => {
      setTitle(data.data_1.title);
      setSimilarity(data.data_1.sim);
    });
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>The current title is {title}.</p>
        <p>The current similarity is: {sim}</p>
      </header>
    </div>
  );
}

export default App;
