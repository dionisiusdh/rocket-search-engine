import React, { useState, useEffect } from 'react';
import { Document } from '../components/Document';
import { Header, Container } from "semantic-ui-react";
import { getCookie } from '../services/Cookie';
import { Link } from 'react-router-dom';

const divStyle = {
  backgroundColor:'#f8c414',
  height: '100%',
  width: '100%'
}
const divFooter = {
  backgroundColor:'black',
  color:'#f8c414',
  fontfamily: 'verdana'
}
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
    <body  style={divStyle} >
      <header style={divFooter}>
                  <h2>IniGugel</h2>
      </header>
      <div className="App">
        <Container style={{marginTop:40, marginLeft:30, marginRight:30, backgroundColor:'powderblue', borderRadius: 10, width:200}}>
          <h1>RESULT</h1>
        </Container>
        <Container>
          <Document docs={documents} />
        </Container>
        <br></br>
        <Container style={{backgroundColor:'lightgreen', borderRadius: 10, width:200}}>
          <Link to="/">Kembali</Link>
        </Container>
        <br></br><br></br>
      </div>
      <footer style={divFooter} className="footer">
                <p>© 2020 IniGugel</p>
      </footer>
    </body>
  );
}

export default Result;