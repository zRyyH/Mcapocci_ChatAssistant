import React, { useContext } from 'react';
import styles from './index.module.css'

import { ChatContext } from '../../contexts/chatContext';
import { AppContext } from '../../contexts/appContext';

import Message from '../../componentes/chatMessage';
import ChatInput from '../../componentes/chatInput';
import ButtonSendMessage from '../../componentes/buttonSendMessage';


function ChatPage() {
    const { sessionId, config } = useContext(AppContext)
    const { chat, endOfMessagesRef } = useContext(ChatContext)

    return (
        <div className={styles.master} >
            <div className={styles.container}>

                <div className={styles.chatBar}>
                    <div className={styles.chatLogo}>
                        <img style={{ width: '60px', borderRadius: '99px' }} src="https://i.pinimg.com/originals/79/74/13/7974139d93849a61e8ba4b2d4321cd4d.jpg" />
                    </div>

                    <div className={styles.chatTitle}>
                        <h1>{config.perfil_name}</h1>
                        <p>{sessionId}</p>
                    </div>
                </div>

                <div className={styles.chatWindow}>
                    {chat.map((_, index) => (<Message index={index} />))}
                    <div ref={endOfMessagesRef} />
                </div>

                <div className={styles.inputContainer}>
                    <ChatInput />
                    <ButtonSendMessage />
                </div>

            </div>
        </div>
    );
}

export default ChatPage;