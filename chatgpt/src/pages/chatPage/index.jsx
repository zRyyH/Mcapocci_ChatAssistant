import React, { useContext } from 'react';
import styles from './index.module.css'

import { ChatContext } from '../../contexts/chatContext';
import { AppContext } from '../../contexts/appContext';

import Message from '../../componentes/chatMessage';
import ChatInput from '../../componentes/chatInput';
import ButtonSendMessage from '../../componentes/buttonSendMessage';


function ChatPage() {
    const { config } = useContext(AppContext)
    const { chat, endOfMessagesRef } = useContext(ChatContext)

    console.log(config)

    return (
        <div className={styles.master} >
            <img className={styles.background} src={`http://awpsoft.com.br:8080/src/${config.background}.png`} />

            <div className={styles.container}>

                <div className={styles.chatBar}>
                    <div className={styles.chatLogo}>
                        <img style={{ width: '60px', borderRadius: '99px' }} src={`http://awpsoft.com.br:8080/src/${config.perfil}.png`} />
                    </div>

                    <div className={styles.chatTitle}>
                        <h1>{config.name}</h1>
                        <p>{config.chatSubtitle}</p>
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