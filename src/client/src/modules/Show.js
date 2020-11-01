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
  const [file, setFile] = useState([]);
  const [path, setPath] = useState('');

  useEffect(() => {
    fetch('/show/' + 'Komodo.txt').then(res => res.json()).then(data => {

    });
  }, []);

  return (
    <body>
      <Header/>
      <div className="App">
      </div>
      <Footer/>
    </body>
  );
}

export default Show;