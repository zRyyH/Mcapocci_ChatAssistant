import { useNavigate } from 'react-router-dom';
import React from 'react';

function HomePage() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/chat');
    };

    return (
        <div className='main' >
            <div className='home-bar' >
                <h2>M.CAPPOCI</h2>
            </div>

            <div className='home-body' >
                <div className='logo-container' >
                    <img className="home-logo" src="https://i.pinimg.com/originals/79/74/13/7974139d93849a61e8ba4b2d4321cd4d.jpg" />
                </div>

                <div className='home-subtitle_1' >
                    <h3>Tire todas suas dúvias por aqui sobre meu trabalho.</h3>
                </div>

                <div className='home-subtitle_2' >
                    <h3>Pergunte o que quiser.</h3>
                </div>
            </div>

            <div className='home-baseboard' >
                <button className='home-chat-button' onClick={handleSubmit} >
                    <h3 style={{ color: 'white' }} >Chat</h3>
                </button>
                <a href='https://www.google.com.br/' style={{ color: 'black' }} >Instagram @m.capocci</a>
            </div>
        </div>
    );
};

export default HomePage;