import { useState } from 'react';
import { HomeContext } from '../contexts/homeContext';
import HomePage from '../pages/homePage';


export default function HomeProvider() {
    const [meuEstado, setMeuEstado] = useState('Valor inicial');

    return (
        <HomeContext.Provider value={{ meuEstado, setMeuEstado }}>
            <HomePage />
        </HomeContext.Provider>
    );
};