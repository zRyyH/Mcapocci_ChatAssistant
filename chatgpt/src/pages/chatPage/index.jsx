import React, { useContext } from 'react';
import styles from './index.module.css'
import { ChatContext } from '../../contexts/chatContext';
import { AppContext } from '../../contexts/appContext';
import Message from '../../componentes/chatMessage';
import ChatInput from '../../componentes/chatInput';
import ButtonSendMessage from '../../componentes/buttonSendMessage';



function ChatPage() {
    const apacheUrl = process.env.REACT_APP_APACHE_URL;
    
    const { config } = useContext(AppContext)
    const { chat, endOfMessagesRef } = useContext(ChatContext)

    return (
        <div className={styles.master} >
            <img className={styles.background} src={`${apacheUrl}/${config.background}.png`} alt='logo' />
            
            <div className={styles.container}>

                <div className={styles.chatBar}>
                    <div className={styles.chatLogo}>
                        <img className={styles.logo} src={`${apacheUrl}/${config.perfil}.png`} alt='logo' />
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