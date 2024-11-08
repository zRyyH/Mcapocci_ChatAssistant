import React, { useContext } from "react";
import { ChatContext } from "../../contexts/chatContext";

function ChatInput() {
    const { eventChange, eventPressKey, userInput } = useContext(ChatContext);

    return (
        <input
            type="text"
            value={userInput}
            onChange={eventChange}
            onKeyDown={eventPressKey}
            placeholder="Enviar mensagem..."
        />
    )
}

export default ChatInput;