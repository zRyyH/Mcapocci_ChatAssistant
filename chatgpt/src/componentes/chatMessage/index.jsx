import React from 'react';
import styles from './index.module.css'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';

import ReactLoading from 'react-loading';
import useMessage from '../../hooks/useMessage'
import useMessageStyles from '../../hooks/styles/useMessageStyles';

const Message = ({ index }) => {
    const { data, loading, author, mode } = useMessage(index);
    const dynamicStyles = useMessageStyles(mode);

    return (
        <>
            {loading ? (
                <motion.div
                    key={loading}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.75 }}
                    className={styles.master}
                    style={dynamicStyles.masterContainer} >

                    <p className={styles.authorText} >{author}</p>
                    <div style={{ padding: '5px' }} >
                        <ReactLoading color="#000" height={20} width={20} />
                    </div>

                </motion.div>
            ) : (
                <motion.div
                    key={loading}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.75 }}
                    className={styles.master}
                    style={dynamicStyles.masterContainer} >

                    <p className={styles.authorText} >{author}</p>
                    <div style={dynamicStyles.textContainer} className={styles.messageContainer} >
                        <ReactMarkdown className={mode === 'USER' ? styles.markdownUser : styles.markdownBot} remarkPlugins={[remarkGfm]} >{data}</ReactMarkdown>
                    </div>

                </motion.div>
            )}
        </>
    );
};

export default Message;