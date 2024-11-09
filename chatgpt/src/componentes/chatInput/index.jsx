import React, { useContext } from "react";
import { ChatContext } from "../../contexts/chatContext";
import { AppContext } from "../../contexts/appContext";


function ChatInput() {
    const { eventChange, eventPressKey, userInput } = useContext(ChatContext);
    const { config } = useContext(AppContext);

    return (
        <input
            type="text"
            value={userInput}
            onChange={eventChange}
            onKeyDown={eventPressKey}
            placeholder={config.chatInputPlaceholder}
        />
    )
}

export default ChatInput;