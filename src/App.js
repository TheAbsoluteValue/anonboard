import React, { useState, useEffect, useReducer } from 'react';
import Message from './Message'
import axios from 'axios';
import './App.css';


export default function App() {

	const [msgs, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case 'add':
				return [action.jsx, ...state];
			case 'delete':
				return state.filter((msg) => msg.key !== action.id);
			default:
				return state;
		}
	}, []);

	const [iMsg, setiMsg] = useState(null);

	function getMessages() {
		axios.get("http://localhost:3001/api/getMessages")
			.then(res => {
				res.data.messages.forEach(msg => {
					dispatch({
						type: 'add',
						jsx: (
							<div id="msg" key={msg._id}>
								<Message delete={deleteMessage} message={msg.message} date={msg.date} id={msg._id}/><br/>
							</div>
						)
					})
				});
			})
			.catch(err => console.error(err));
	};

	function deleteMessage(id) {
        axios.post('http://localhost:3001/api/deleteMessage', { id })
            .then(() => {
                dispatch({
                    type: 'delete',
                    id
                });
				console.log('Message deleted');
            })
            .catch(err => console.error(err));
    }

	function sendMessage() {
		if (!iMsg) return;
		axios.post("http://localhost:3001/api/sendMessage", { content: iMsg })
			.then(res => {
				console.log(res);
				dispatch({
					type: 'add',
					jsx: (
					<div id="msg" key={res.data.message._id}>
						<Message delete={deleteMessage} message={res.data.message.message} date={res.data.message.date} id={res.data.message._id} visible={1}/><br/>
					</div>
					)
				});
			})
			.catch(err => {
				console.error(err);
			});
	}

	useEffect(() => {
		getMessages();
		return () => console.log('Done')
	}, []);

	return (
		<div>
			<h1>Anon board project</h1>
			<textarea rows="4" cols="50" onChange={(e)=>setiMsg(e.target.value)}></textarea>
			<button onClick={sendMessage}>Submit</button>
			<br></br>
			<div id="msg">
				{msgs}
			</div>
			<br></br>
		</div>
	);
}
