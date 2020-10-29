import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Document } from './components/Document';
import { QueryForm } from './components/QueryForm';
import { Header, Container } from "semantic-ui-react";

function App() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetch('/query').then(res => res.json()).then(data => {
      setDocuments(data);
    });
  }, []);

  return (
    <div className="App">
      <Container style={{marginTop:40, marginLeft:30, marginRight:30}}>
        <Header>Query</Header>
        <form action="{{url_for('query')}}" method="post">
          <p><input type="text" name="query"/></p>
          <p><input type="submit" value="submit"/></p>
        </form>
        <Document docs={documents} />
      </Container>
    </div>
  );
}

export default App;