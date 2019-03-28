import React from 'react';

export default function Message(props) {
    return (
        <div>
            <p>{props.message}</p>
            <p>Sent at {props.date}</p>
        </div>
    );
}