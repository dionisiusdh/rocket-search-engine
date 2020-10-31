import React, { useState } from 'react';
import { setCookie } from './../services/Cookie';

// Components
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';
import { Container } from "semantic-ui-react";

// Styling
import './Home.css';
import { Form, Button } from 'react-bootstrap';

function Home() {
    const [query, setQuery] = useState("");

    // Cookie
    setCookie('query',query,1);
    return (
        <body className='home'>
            <Header/>
            <div>
                <Container style={{marginTop:40, marginLeft:30, marginRight:30, marginBottom:470}}>
                    <Form>
                        <Form.Group className="query-form center" action="/post" method="post">
                            <h1 className="home-title">
                                <span style={{color:'#4885ed'}}>G</span>
                                <span style={{color:'#1aa260'}}>u</span>
                                <span style={{color:'#db3236'}}>g</span>
                                <span style={{color:'#4885ed'}}>e</span>
                                <span style={{color:'#f4c20d'}}>l</span>
                            </h1>
                            <Form.Control required type="text" name="que"
                                          placeholder="Query..." 
                                          onChange={e => setQuery(e.target.value)} />
                            <Form.Text className="text-muted">
                            Untuk mendapat hasil terbaik, masukkan minimal 3 kata
                            </Form.Text>
                            <Link to={"/result/" + query}>
                                <Button variant="success" type="submit" value="submit">Search</Button>{' '}
                            </Link>
                        </Form.Group>
                    </Form>
                </Container>
            </div>
            <Footer/>
        </body>
    )
}

export default Home;