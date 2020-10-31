import React from "react";
import { List, Header } from "semantic-ui-react";
import "./Document.css"

export const Document = ({ docs }) => {
    if (docs != "") {
        return (
            <List className="document">
                {docs.map(doc => {
                    return (
                        <List.Item key={doc.title} className="doc">
                            <a className="doc-title">{doc.title}</a>
                            <p>Sim: {doc.sim}</p>
                            <p>{doc.first_sentence}</p>
                        </List.Item>
                    )
                })}
            </List>
        );
    } else {
        return (
            <a>Tidak ada dokumen atau query yang ditemukan.</a>
        )
    }
}