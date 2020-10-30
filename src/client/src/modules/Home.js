import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setCookie } from './../services/Cookie';
import { Header, Container } from "semantic-ui-react";

function Home() {
    const [query, setQuery] = useState("");

    // Cookie
    setCookie('query',query,1);
    
    return (
        <div className="App">
            <Container style={{marginTop:40, marginLeft:30, marginRight:30}}>
                <Link to="/upload">Upload dokumen</Link>
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
    );
}

export default Home;