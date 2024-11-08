import React from 'react';
import styles from './index.module.css'
import ReactLoading from 'react-loading';
import useMessage from '../../hooks/useMessage'
import useMessageStyles from '../../hooks/styles/useMessageStyles';

const Message = ({ index }) => {
    const { data, loading, author, mode } = useMessage(index);
    const dynamicStyles = useMessageStyles(mode);

    return (
        <div key={index} className={styles.master} style={dynamicStyles.messageContainer} >
            <p style={{ padding: '3px' }} >{author}</p>

            <div className={styles.messageContainer} style={dynamicStyles.textContainer} >
                {loading ? (
                    <ReactLoading type="spin" color="#fff" height={20} width={20} />
                ) : (
                    <p style={dynamicStyles.text} >{data}</p>
                )}
            </div>
        </div>
    );
};

export default Message;