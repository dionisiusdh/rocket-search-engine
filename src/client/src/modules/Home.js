import React, { useState, useEffect, Component} from 'react';
import { Link } from 'react-router-dom';
import { setCookie } from './../services/Cookie';
import { Header, Container } from "semantic-ui-react";
import {Navbar, Nav, NavDropdown}  from 'react-bootstrap';

const divStyle = {
    backgroundColor:'#f8c414',
    height: '100%',
    width: '100%'
}
const divFooter = {
    backgroundColor:'black',
    color:'#f8c414'
}

function Home() {
    const [query, setQuery] = useState("");

    // Cookie
    setCookie('query',query,1);
    return (
        <body style={divStyle}>
            <header style={divFooter}>
                <h1 style={{fontFamily:"Product Sans"}}><span style={{color:'#4885ed'}}>I</span><span style={{color:'#db3236'}}>n</span><span style={{color:'#f4c20d'}}>i</span>
                    <span style={{color:'#4885ed'}}>G</span><span style={{color:'#1aa260'}}>u</span><span style={{color:'#db3236'}}>g</span>
                    <span style={{color:'#4885ed'}}>e</span><span style={{color:'#f4c20d'}}>l</span>
                </h1>
            </header>
            <div className="App">
                <Container style={{marginTop:40, marginLeft:30, marginRight:30, marginBottom:470}}>
                    <Container style={{backgroundColor:'lightgreen', borderRadius: 10, width:200}}>
                         <Link to="/upload">Upload dokumen</Link>
                    </Container>
                    <Header>Query</Header>
                    <form action="/post" method="post">
                        <p>
                            <input required type="text" name="que"
                                    placeholder="Query..." 
                                onChange={e => setQuery(e.target.value)}/>
                        </p>
                        <Link to={"/result/" + query}><p><input type="submit" value="submit"/></p></Link>
                    </form>
                </Container>
            </div>
            <footer style={divFooter} className="footer">
                <p>© 2020 IniGugel</p>
            </footer>
        </body>
    )
}

export default Home;