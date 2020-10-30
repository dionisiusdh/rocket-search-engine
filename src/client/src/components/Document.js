import React from "react";
import { List, Header } from "semantic-ui-react";

export const Document = ({ docs }) => {
    if (docs != "") {
        return (
            <List>
                {docs.map(doc => {
                    return (
                        <List.Item key={doc.title} style={{paddingTop:30, paddingLeft:60, paddingRight:60}}>
                            <Header>{doc.title}</Header>
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