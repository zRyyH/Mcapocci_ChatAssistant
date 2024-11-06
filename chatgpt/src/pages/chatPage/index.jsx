import React, { useState, useEffect, useRef } from 'react';
import Message from '../../componentes/message';
import { v4 as uuidv4 } from 'uuid';
import styles from './index.module.css'
import sendIcon from '../../midia/send.png'

function ChatPage() {
    const [input, setInput] = useState('');
    const [msg, setMsgs] = useState([]);
    const [id, setId] = useState(null);
    const endOfMessagesRef = useRef(null);

    useEffect(() => {
        setId(uuidv4());
    }, [setId]);

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            submit()
        }
    }

    const autoscroll = () => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    function submit() {
        setInput('')
        let temp_msg = msg;
        temp_msg.push({ msg: input, mode: 'USER', func: autoscroll, id: id })
        temp_msg.push({ msg: input, mode: 'ASSISTENT', func: autoscroll, id: id })
        setMsgs(temp_msg)
    };

    return (
        <div className={styles.master} >
            <div className={styles.container}>

                <div className={styles.chatBar}>
                    <div className={styles.chatLogo}>
                        <img className="logo" src="https://i.pinimg.com/originals/79/74/13/7974139d93849a61e8ba4b2d4321cd4d.jpg" />
                    </div>

                    <div className={styles.chatTitle}>
                        <h1>M.CAPOCCI</h1>
                        <p>Tire suas dúvidas, pergunte tudo.</p>
                    </div>
                </div>

                <div className={styles.chatWindow}>
                    {msg.map((message, index) => (
                        <Message index={index} msg={message.msg} mode={message.mode} func={message.func} id={message.id} />
                    ))}
                    <div ref={endOfMessagesRef} />
                </div>

                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={handleEnterPress}
                        placeholder="Enviar mensagem..."
                    />
                    <button className={styles.chatSendButton} onClick={() => submit()} >
                        <img src={sendIcon} style={{ width: '23px', height: '23px' }} />
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ChatPage;