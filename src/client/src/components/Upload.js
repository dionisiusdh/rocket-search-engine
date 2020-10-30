import React from 'react';
import { Link } from 'react-router-dom'

export const Upload = () => {
    // Handling upload
    const handleUpload = () => {
        const res = fetch('/upload' , 
        {
            method: 'POST'
        });
    }

    return (  
        <div> 
            <h1>Upload Dokumen</h1>
            <h4>Pilih satu atau lebih dokumen berformat: .txt / .html</h4>
            <form method="post" enctype="multipart/form-data">
                <input type="file" name="file" multiple/>
                <input type="submit" value="Upload" onClick={handleUpload}/>
            </form>
            <br></br>
            <Link to="/">Kembali</Link>
        </div>
    )
}