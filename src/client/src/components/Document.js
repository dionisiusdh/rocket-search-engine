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
                            <a className="doc-title" href={"/show/" + doc.title}>{doc.title}</a>
                            <p className="fs">{doc.first_sentence}</p>
                            <p className="sim">Sim: {doc.sim}</p>
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