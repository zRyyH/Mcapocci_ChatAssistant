import { useMemo } from 'react';

const useMessageStyles = (mode) => {
    return useMemo(() => {
        const styles = {
            messageContainer: {
                alignItems: mode === 'USER' ? 'flex-end' : 'flex-start',
            },
            textContainer: {
                backgroundColor: mode === 'USER' ? '#fff' : '#000',
            },
            text: {
                color: mode === 'USER' ? '#000' : '#fff',
                letterSpacing: '0.3px',
            },
        };

        return styles;
    }, [mode]);
};

export default useMessageStyles;
