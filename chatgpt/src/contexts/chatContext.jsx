import { createContext } from 'react';
export const ChatContext = createContext({
    userInput: '',
    chat: [],
    endOfMessagesRef: null,
    setUserInput: null,
    setChat: null,
    eventChange: null,
    eventPressKey: null,
    sendMessage: null,
    autoScroll: null
});