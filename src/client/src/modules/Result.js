import React, { useState, useEffect } from 'react';

// Components
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Document } from '../components/Document';
import { Container } from "semantic-ui-react";
import { getCookie } from '../services/Cookie';
import { Link } from 'react-router-dom';
import { JsonToTable } from "react-json-to-table";

// Styling
import "./Result.css"
import { Button } from 'react-bootstrap';

function Result() {
  const [documents, setDocuments] = useState([]);
  const [table, setTable] = useState('')
  const [showTable, setShowTable] = useState(false)
  const [path, setPath] = useState('');

  useEffect(() => {
    fetch('/result/' + getCookie('query')).then(res => res.json()).then(data => {
      setDocuments(data);
      setPath(getCookie('query'));
    });
  }, []);

  const getTfTable = () => {
    if (table == '') {
      fetch('/tf-table/' + getCookie('query'), {
        method: "GET"
      }).then((res => {
        return res.json();
      }))
      .then((data => {
        console.log(data)
        setTable(data);

        if (showTable) {
          setShowTable(false);
        } else {
          setShowTable(true);
        }
      }))
    } else {
      if (showTable) {
        setShowTable(false);
      } else {
        setShowTable(true);
      }
    }
  }

  return (
    <body className="result">
      <Header/>
      <div className="App">
        <h1 className="result-title">Result</h1>
        <Button className="show-button" onClick={getTfTable}>{showTable ? <p>Hide Term Table</p> : <p>Show Term Table</p>}</Button>
        {showTable ? 
          <div className="ttable-all center">
            <h2 className="ttable-title">Term Frequency Table</h2>
            <div className="ttable-box">
              <div className="ttable center">
                <JsonToTable json={table}/>
              </div> 
            </div>
          </div>
            
            : 
            
            <a></a>
        }
        <Container style={{textAlign:'left'}}>
          <Document docs={documents} />
        </Container>
      </div>
    </body>
  );
}

export default Result;