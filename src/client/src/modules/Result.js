import React, { useState, useEffect } from 'react';
import { setCookie } from './../services/Cookie';

// Components
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Document } from '../components/Document';
import { Container } from "semantic-ui-react";
import { getCookie } from '../services/Cookie';
import { Link } from 'react-router-dom';
import { JsonToTable } from "react-json-to-table";

// Styling
import "./Result.css";
import { Form, Button } from 'react-bootstrap';

function Result() {
  const [documents, setDocuments] = useState([]);
  const [table, setTable] = useState('');
  const [showTable, setShowTable] = useState(false);
  const [newQuery, setNewQuery] = useState("");
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

  function refreshPage() {
    setCookie('query',newQuery,1);
    setDocuments([]);
  }

  return (
    <div>
        <body className="result">
          <Header/>
          <div className="search-bar">
            <Form>
                <Form.Group className="query-box center" action="/post" method="post">
                    <Form.Control className="query-form" required type="text" name="que"
                                  placeholder="Another Query..." 
                                  onChange={e => setNewQuery(e.target.value)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    <div><Button onClick={() => refreshPage()}variant="success" type="submit" value="submit">Search</Button>{' '}</div>
                </Form.Group>
            </Form>
          </div>
          <div className="App">
            <h1 className="result-title">Result for: {getCookie('query')}</h1>
            <Button className="show-button" onClick={getTfTable}>{showTable ? <p>Hide Term Table</p> : <p>Show Term Table</p>}</Button>
            {showTable ? 
              <div className="ttable-all center">
                <h2 className="ttable-title">Term Frequency Table</h2>
                <div className="ttable-box">
                  <div className="ttable">
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
    </div>
  );
}

export default Result;