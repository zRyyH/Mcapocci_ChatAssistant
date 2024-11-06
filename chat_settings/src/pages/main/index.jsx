import React, { useState, useRef } from 'react'
import myGif from '../../midia/upload.gif'
import styles from './index.module.css';

function MainPage() {
    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            console.log(file)
        }
    };

    // Função para enviar o arquivo para o servidor
    const handleUpload = async () => {
        if (!file) {
            alert('Por favor, selecione um arquivo!');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            // Enviar o arquivo para o servidor usando axios
            const response = await axios.post('http://awpsoft.com.br:15000/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            alert('Arquivo enviado com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar o arquivo:', error);
            alert('Falha no envio!');
        }
    };

    return (
        <div className={styles.master} >
            <div className={styles.header}>
                <p style={{ fontSize: '30px', fontWeight: 'bold' }} >Data Sources</p>
            </div>

            <div className={styles.body} >
                <div className={styles.upload_container} >
                    <div style={{ width: '100%' }} >
                        <p style={{ fontSize: '27px', fontWeight: '500' }} >Files</p>
                    </div>

                    <div className={styles.files_container} >
                        <img src={myGif} alt='EXEMPLO' style={{ width: '50px', height: '50px', borderRadius: '5px' }} />

                        <input
                            ref={fileInputRef}
                            id="file-input"
                            type="file"
                            style={{}}
                            onChange={handleFileChange}
                        />

                    </div>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }} >
                        <p style={{ color: '#999' }} >Arraste os arquivos para que para fazer upload.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;