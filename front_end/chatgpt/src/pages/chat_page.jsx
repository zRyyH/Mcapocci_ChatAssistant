import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import Message from '../componentes/message';

function ChatPage() {
    const [input, setInput] = useState('');
    const [msg, setMsgs] = useState([]);
    const [my_id, setId] = useState('');

    useEffect(() => {
        setId(uuidv4())
      }, []);

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    function submit() {
        const textinput = input
        setInput('')

        let listmsg = [...msg, {
            index: uuidv4(),
            msg: textinput,
            mode: 'USER'
        }]
        setMsgs(listmsg)

        axios.post('http://localhost:5000/get_gpt', { user_input: textinput, user_id: my_id })
            .then(function (response) {
                listmsg = [...listmsg, {
                    index: uuidv4(),
                    msg: response.data,
                    mode: 'ASSISTENT'
                }]

                setMsgs(listmsg)
            })
            .catch(function (error) {
                console.error(error);
            });

    };

    return (
        <div className="master">

            <div className="chat-bar">
                <div className="chat-logo">
                    <img className="logo" src="https://i.pinimg.com/originals/79/74/13/7974139d93849a61e8ba4b2d4321cd4d.jpg" />
                </div>

                <div className="chat-title">
                    <h1>M.CAPOCCI</h1>
                    <p className="sub-title" >Tire suas dúvidas, pergunte tudo.</p>
                </div>
            </div>

            <div className="chat-window">
                {msg.map((message, index) => (
                    <Message index={index} msg={message.msg} mode={message.mode} />
                ))}
            </div>

            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Enviar mensagem..."
                />
                <button className='chat-send-button' onClick={() => submit()} >
                    SEND
                </button>
            </div>

        </div>
    );
}

export default ChatPage;