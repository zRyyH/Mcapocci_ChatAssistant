import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../contexts/appContext'
import styles from './index.module.css'



function HomePage() {
    const apacheUrl = process.env.REACT_APP_APACHE_URL;

    const navigate = useNavigate();
    const { config } = useContext(AppContext);

    const handleSubmit = () => {
        navigate('/chat');
    };

    return (
        <div className={styles.master} >
            <img className={styles.background} src={`${apacheUrl}/${config.background}.png`} alt='logo' />
            <div className={styles.container} >
                <div className={styles.homeBar} >
                    <p className={styles.defaultTitle}>{config.name}</p>
                </div>

                <div className={styles.homeBody} >
                    <div className={styles.logoContainer} >
                        <img className={styles.homeLogo} src={`${apacheUrl}/${config.perfil}.png`} alt='logo' />
                    </div>

                    <div className={styles.homeSubtitle_1} >
                        <p className={styles.defaultText}>{config.homeSubtitle1}</p>
                    </div>

                    <div className={styles.homeSubtitle_2} >
                        <p className={styles.defaultText}>{config.homeSubtitle2}</p>
                    </div>
                </div>

                <div className={styles.homeBaseboard} >
                    <button className={styles.homeChatButton} onClick={handleSubmit} >
                        <p className={styles.defaultText} style={{ color: 'white', fontWeight: 'bold' }} >Chat</p>
                    </button>
                    <a className={styles.defaultText} href={`https://www.instagram.com/${config.instagram}/`} >Instagram @{config.instagram}</a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;