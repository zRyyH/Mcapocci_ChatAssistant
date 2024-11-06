import React, { useState, useEffect } from "react";

function FileUpload() {
    const [file, setFile] = useState(null);

    useEffect (() => {

    }, [])

    // Função para lidar com a seleção de arquivo
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
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
            const response = await axios.post('URL_DO_SEU_SERVIDOR', formData, {
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

}

export default FileUpload;