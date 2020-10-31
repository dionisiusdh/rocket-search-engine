import React, { useState, useEffect } from 'react';

// Components
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Document } from '../components/Document';
import { Container } from "semantic-ui-react";
import { getCookie } from '../services/Cookie';
import { Link } from 'react-router-dom';

// Styling
import "./Show.css"

function Show() {
  const [documents, setDocuments] = useState([]);
  const [path, setPath] = useState('');

  useEffect(() => {
    fetch('/result/' + getCookie('query')).then(res => res.json()).then(data => {
      setDocuments(data);
      setPath(getCookie('query'));
    });
  }, []);

  return (
    <body>
      <Header/>
      <div className="App">
        <Container style={{marginTop:40, marginLeft:30, marginRight:30, backgroundColor:'powderblue', borderRadius: 10, width:200}}>
          <h1>RESULT</h1>
        </Container>
        <Container style={{textAlign:'left'}}>
          <Document docs={documents} />
        </Container>
        <br></br>
        <Container style={{backgroundColor:'lightgreen', borderRadius: 10, width:200}}>
          <Link to="/">Kembali</Link>
        </Container>
        <br></br><br></br>
      </div>
      <Footer/>
    </body>
  );
}

export default Show;