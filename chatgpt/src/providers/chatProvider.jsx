import { ChatContext } from '../contexts/chatContext';
import useChat from '../hooks/useChat';
import ChatPage from '../pages/chatPage'

export default function ChatProvider() {
    const {
        userInput,
        chat,
        endOfMessagesRef,
        setUserInput,
        setChat,
        eventChange,
        eventPressKey,
        sendMessage,
        autoScroll } = useChat();

    return (
        <ChatContext.Provider
            value={{
                userInput,
                chat,
                endOfMessagesRef,
                setUserInput,
                setChat,
                eventChange,
                eventPressKey,
                sendMessage,
                autoScroll
            }}>
            <ChatPage />
        </ChatContext.Provider>
    );
};