import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Message(props) {

    return (
        <div>
            <button onClick={() => props.delete(props.id)}>Delete</button>
            <p>{props.message}</p>
            <p>Sent at {props.date}</p>
        </div>
    );
}