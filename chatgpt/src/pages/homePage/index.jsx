import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../contexts/appContext'

import styles from './index.module.css'

function HomePage() {
    const navigate = useNavigate();
    const { config } = useContext(AppContext);

    const handleSubmit = () => {
        navigate('/chat');
    };

    return (
        <div className={styles.master} >
            <div className={styles.container} >
                <div className={styles.homeBar} >
                    <p className={styles.defaultTitle}>{config.perfil_name}</p>
                </div>

                <div className={styles.homeBody} >
                    <div className={styles.logoContainer} >
                        <img className={styles.homeLogo} src="https://i.pinimg.com/originals/79/74/13/7974139d93849a61e8ba4b2d4321cd4d.jpg" />
                    </div>

                    <div className={styles.homeSubtitle_1} >
                        <p className={styles.defaultText}>Tire todas suas dúvias por aqui sobre meu trabalho.</p>
                    </div>

                    <div className={styles.homeSubtitle_2} >
                        <p className={styles.defaultText}>Pergunte o que quiser.</p>
                    </div>
                </div>

                <div className={styles.homeBaseboard} >
                    <button className={styles.homeChatButton} onClick={handleSubmit} >
                        <p className={styles.defaultText} style={{ color: 'white', fontWeight: 'bold' }} >Chat</p>
                    </button>
                    <a className={styles.defaultText} href='https://www.instagram.com/mcapocci/' >Instagram @m.capocci</a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;