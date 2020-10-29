import React, { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

export const QueryForm = () => {
    const [query, setQuery] = useState('');

    return (
        <Form>
            <Form.Field>
                <Input 
                    placeholder="Query" 
                    value={query}
                    onChange={e => setQuery(e.target.value)} 
                />
            </Form.Field>
            <Form.Field>
                <Button onClick={async () => {
                    const q = [query]
                    const res = await fetch('/query' , {
                        method: 'POST',
                        header: {
                            'Content-Type':'application/json'
                        },
                        body: JSON.stringify(q)
                    })

                    if (res.ok) {
                        console.log('OK')
                    }
                }}>Submit</Button>
            </Form.Field>
        </Form>
    )
}