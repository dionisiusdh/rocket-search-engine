import React from 'react';
import './Header.css';
import { Form, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <Navbar clasName='navbar' variant='dark'>
            <Navbar.Brand>
                <h1 className="title" style={{fontFamily:"Product Sans"}}>
                    <span style={{color:'#4885ed'}}>G</span><span style={{color:'#1aa260'}}>u</span><span style={{color:'#db3236'}}>g</span>
                    <span style={{color:'#4885ed'}}>e</span><span style={{color:'#f4c20d'}}>l</span>
                </h1>
            </Navbar.Brand>
            <Nav className="nav-links">
                <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                <Nav.Link className="nav-link" href="/upload">Upload</Nav.Link>
                <Nav.Link className="nav-link" href="/about">About</Nav.Link>
            </Nav>
        </Navbar>
    )
}

/*
            <NavLink
                to="/"
                className="nav-link"
            >
            <div className='title'>
                <h1 style={{fontFamily:"Product Sans"}}><span style={{color:'#4885ed'}}>I</span><span style={{color:'#db3236'}}>n</span><span style={{color:'#f4c20d'}}>i</span>
                    <span style={{color:'#4885ed'}}>G</span><span style={{color:'#1aa260'}}>u</span><span style={{color:'#db3236'}}>g</span>
                    <span style={{color:'#4885ed'}}>e</span><span style={{color:'#f4c20d'}}>l</span>
                </h1>
            </div>
            </NavLink>*/