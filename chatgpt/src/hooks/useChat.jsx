import React, { useState, useEffect, useRef } from "react";

export default function useSendMessage() {
    const [userInput, setUserInput] = useState('');
    const [chat, setChat] = useState([]);
    const endOfMessagesRef = useRef(null);

    const eventChange = (event) => {
        console.log(event)
        setUserInput(event.target.value);
    };

    const eventPressKey = (event) => {
        if (event.key === 'Enter') {
            sendMessage()
        }
    }

    const autoScroll = () => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    function sendMessage() {
        if (userInput) {
            let temp_msg = chat;
            temp_msg.push({ msg: userInput, mode: 'USER' })
            temp_msg.push({ msg: userInput, mode: 'ASSISTENT' })
            setChat(temp_msg)
            setUserInput('')
        } else {
            alert('Faça uma pergunta!')
        }
    };

    useEffect(() => {

    }, []);

    return { userInput, chat, endOfMessagesRef, setUserInput, setChat, eventChange, eventPressKey, sendMessage, autoScroll }
}