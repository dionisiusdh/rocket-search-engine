import React, { useState, useEffect } from 'react';
import { Document } from '../components/Document';
import { Header, Container } from "semantic-ui-react";
import { getCookie } from '../services/Cookie';

function Result() {
  const [documents, setDocuments] = useState([]);
  const [path, setPath] = useState('');

  useEffect(() => {
    fetch('/result/' + getCookie('query')).then(res => res.json()).then(data => {
      setDocuments(data);
      setPath(getCookie('query'));
    });
  }, []);

  return (
    <div className="App">
      <Container style={{marginTop:40, marginLeft:30, marginRight:30}}>
        <Header>Result</Header>
        <Document docs={documents} />
      </Container>
    </div>
  );
}

export default Result;