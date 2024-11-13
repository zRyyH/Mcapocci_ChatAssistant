import React, { useContext } from 'react';
import { ChatContext } from '../../contexts/chatContext';
import styles from './index.module.css'
import buttonIcon from '../../midia/send.png';

function ButtonSendMessage() {
    const { sendMessage } = useContext(ChatContext);

    return (
        <button className={styles.chatSendButton} onClick={sendMessage} >
            <img className={styles.buttonIcon} src={buttonIcon} />
        </button>
    )
}

export default ButtonSendMessage;