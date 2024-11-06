import React from 'react';
import ReactLoading from 'react-loading';
import useFetchData from '../hooks/useFetchData'

const Message = ({ index, msg, mode, func, id }) => {
    const { data, loading } = useFetchData(msg, mode, func, id);

    let message_container = {
        alignItems: mode === 'USER' ? 'end' : 'flex-start'
    }

    let text_container = {
        backgroundColor: mode === 'USER' ? '#fff' : '#000'
    }

    let text = {
        color: mode === 'USER' ? '#000' : '#fff'
    }

    return (
        <div key={index} className='message-container' style={message_container} >
            <p>{mode}</p>

            <div className='text-container' style={text_container} >
                {loading ? (
                    <ReactLoading type="spin" color="#fff" height={20} width={20} />
                ) : (
                    <p style={text} >{data}</p>
                )}
            </div>
        </div>
    );
};

export default Message;