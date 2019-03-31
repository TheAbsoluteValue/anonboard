import React from 'react';
import './Message.css'

export default function Message(props) {

    return (
        <div id="board">
            <button className="delete" onClick={() => props.delete(props.id)}>Delete</button>
            {props.image ? <img src={props.image} height="200" alt="Loading"/> : null }
            {props.message ? <p>{props.message}</p> : null }
            <p>Sent at {props.date}</p>
        </div>
    );
}