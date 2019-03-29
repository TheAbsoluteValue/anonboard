import React, { useState, useEffect } from 'react';
import Message from './Message'
import axios from 'axios';
import './App.css';

export default function App() {
	const [iMsg, setiMsg] = useState(null);
	const [messages, setMessages] = useState([]);

	function addMessage() {
		if (iMsg) {
			setMessages([<div id="iMsg" key={messages.length}><Message message={iMsg} date={String(new Date())}></Message><br></br></div>, ...messages]);
		}
	}

	function getMessages() {
		axios.get("http://localhost:3001/api/getMessages")
			.then(messages => messages.json())
			.then(res => console.log(res));
			// .then(res => setMessages(res.messages));
	};

	function sendMessage() {
		axios.post("http://localhost:3001/api/sendMessage", { message: iMsg })
			.then(res => {
				console.log(`Message added: ${iMsg}`);
			})
			.catch(err => {
				console.error(err);
			});
	}

	useEffect(() => {
		getMessages();
	}, []);

	return (
		<div>
			<h1>Anon board project</h1>
			<textarea rows="4" cols="50" onChange={(e)=>setiMsg(e.target.value)}></textarea>
			<button onClick={sendMessage}>Submit</button>
			<br></br>
			<div id="msg">
				{messages}
			</div>
			<br></br>
		</div>
	);
}
