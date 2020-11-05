import React from "react";
import { Spinner } from "react-bootstrap";
import { List, Header } from "semantic-ui-react";
import "./Document.css"

export const Document = ({ docs }) => {
    let count = 0;
    if (docs != "") {
        return (
            <List className="document">
                {docs.map(doc => {
                    count += 1
                    return (
                        <List.Item key={doc.title} className="doc">
                            <a className="doc-title" href={"/show/" + doc.title}>{count}. {doc.title}</a>
                            <p className="fs">{doc.first_sentence}</p>
                            <p className="num">Jumlah kata: {doc.num_words}</p>
                            <p className="sim">Similarity: {doc.sim}</p>
                        </List.Item>
                    )
                })}
            </List>
        );
    } else {
        return (
            <div className="loading-box center">
                <Spinner animation="border" role="status"/>
                <a>Loading...</a><br></br>
                <a>Belum ada dokumen atau query yang ditemukan.</a>
            </div>
        )
    }
}