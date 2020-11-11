import React from 'react';
import './Upload.css'

// Components
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

export const Upload = () => {
    // Handling upload
    const handleUpload = () => {
        const res = fetch('/upload' , 
        {
            method: 'POST'
        });
    }

    return (  
        <body className="upload">
            <Header/>
            <div className="upload-box center">
                <h1 className="upload-title">Upload Dokumen</h1>
                <h4>Pilih satu atau lebih dokumen berformat: .txt</h4>
                <Form method="post" enctype="multipart/form-data">
                    <input type="file" name="file" multiple/>
                    <input type="submit" value="Upload" onClick={handleUpload}/>
                </Form>
            </div>
            <Footer/>
        </body>
    )
}