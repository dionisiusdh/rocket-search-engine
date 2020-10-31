import React, { useState } from 'react';
import { setCookie } from './../services/Cookie';

// Components
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

// Styling
import './About.css';

function About() {
    return (
        <body className='about'>
            <Header/>
            <div className="about-box center">
                <h1>About</h1>
                <Table className="table" striped bordered hover variant="dark" size="sm">
                    <thead>
                        <tr>
                        <th>Nama</th>
                        <th>NIM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Rexy Gamaliel R.</td>
                        <td>13519010</td>
                        </tr>
                        <tr>
                        <td>Dionisius Darryl H.</td>
                        <td>13519058</td>
                        </tr>
                        <tr>
                        <td>Wilson Tandya</td>
                        <td>13519209</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Footer/>
        </body>
    )
}

export default About;