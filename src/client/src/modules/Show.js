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
import { Button } from 'react-bootstrap';

function Show() {
  const [path, setPath] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  let loc = window.location.href.slice(21, window.location.href.length)

  useEffect(() => {
    fetch(loc + '.txt').then(res => res.json()).then(data => {
      setText(data.text);
      setTitle(data.title);
    });
  }, []);

  return (
    <body>
      <Header/>
        <div className="text-box">
          <div className="text-title">
            <a href="">{title}</a>
          </div>
          <div className="text-content">
            {text}
          </div>
          <Button variant="dark" href="/result">Back</Button>{' '}
        </div>
    </body>
  );
}

export default Show;