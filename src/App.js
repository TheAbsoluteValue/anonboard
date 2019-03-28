import React, { useState } from 'react';
import Message from './Message'
import './App.css';

export default function App() {
	const [msg, setMsg] = useState(null);
	const [messages, setMessages] = useState([]);

	function addMessage() {
		if (msg) {
			setMessages([<div id="msg" key={messages.length}><Message message={msg} date={String(new Date())}></Message><br></br></div>, ...messages]);
		}
	}

	return (
		<div>
			<h1>Anon board project</h1>
			<textarea rows="4" cols="50" onChange={(e)=>setMsg(e.target.value)}></textarea>
			<button onClick={addMessage}>Submit</button>
			<br></br>
			<div id="msg">
				{messages}
			</div>
			<br></br>
		</div>
	);
}
