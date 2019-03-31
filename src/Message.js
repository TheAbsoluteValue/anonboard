import React from 'react';

export default function Message(props) {

    return (
        <div>
            <button onClick={() => props.delete(props.id)}>Delete</button>
            <p>{props.message}</p>
            <p>Sent at {props.date}</p>
        </div>
    );
}