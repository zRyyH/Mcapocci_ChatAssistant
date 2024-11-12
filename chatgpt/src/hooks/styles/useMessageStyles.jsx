import { useMemo } from 'react';
import Loading from 'react-loading';

const useMessageStyles = (mode) => {
    return useMemo(() => {
        const styles = {
            masterContainer: {
                alignItems: mode === 'USER' ? 'flex-end' : 'flex-start',
                paddingBottom: mode === 'USER' ? '0px' : '0px',
            },
            textContainer: {
                backgroundColor: mode === 'USER' ? '#fff' : '#000',
                paddingBottom: mode === 'USER' ? '0px' : '0px',
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
