import React from 'react';

const Message = ({ index, msg, mode }) => {
    let message_container = { alignItems: mode === 'USER' ? 'end' : 'flex-start' }
    let text_container = { backgroundColor: mode === 'USER' ? '#fff' : '#000' }
    let text = { color: mode === 'USER' ? '#000' : '#fff' }

    return (
        <div key={index} className='message-container' style={message_container} >
            <p>{mode}</p>

            <div className='text-container' style={text_container} >
                <p style={text} >{msg}</p>
            </div>
        </div>
    );
};

export default Message;