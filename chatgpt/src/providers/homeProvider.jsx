import { useState } from 'react';
import { HomeContext } from '../contexts/homeContext';

export const MeuProvider = ({ children }) => {
    const [meuEstado, setMeuEstado] = useState('Valor inicial');

    return (
        <HomeContext.Provider value={{ meuEstado, setMeuEstado }}>
            {children}
        </HomeContext.Provider>
    );
};