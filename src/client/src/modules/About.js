import React, { useState } from 'react';
import { setCookie } from './../services/Cookie';

// Components
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

// Styling
import './About.css';

function About() {
    return (
        <body className='about'>
            <Header/>
            <div className="about-box center">
                <h1>About</h1>
                <h2>Kelompok 8 - tasdasdadwda</h2>
                <div className="about-desc">
                        Rocket adalah sebuah search engine dalam bentuk website lokal 
                        yang merupakan sebuah aplikasi sistem temu balik informasi 
                        dengan menggunakan teori dot product pada vektor. 
                        <br></br><br></br>
                        
                        <h2>How to use?</h2>
                        1. Upload dokumen dalam bentuk .txt pada menu 'Upload'
                        <br></br>
                        2. Masukkan query yang ingin anda cari pada home page
                        <br></br>
                        3. Anda akan mendapatkan term frequency table dan hasil dokumen terurut berdasarkan nilai cosine similarity dengan query anda.
                </div>
                <Button className="cb" variant="outline-success">
                    Created By:
                </Button>
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