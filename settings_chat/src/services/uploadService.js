import axios from 'axios';

export async function setConfigs(dados) {
    try {
        const resposta = await axios.post('https://api.mcapocci.com.br/set_configs', dados);
        if (resposta.status === 200) {
            console.log('Resposta da requisição:', resposta.data);
            return true
        }
    } catch (erro) {
        console.error('Erro na requisição:', erro);
        return false;
    }

    return false;
};

export async function getConfigs() {
    try {
        const resposta = await axios.get('https://api.mcapocci.com.br/configs');
        if (resposta.status === 200) {
            console.log('Resposta da requisição:', resposta.data);
            return resposta.data
        }
    } catch (erro) {
        console.error('Erro na requisição:', erro);
        return false;
    }

    return false;
};

export async function uploadImage(formData) {
    try {
        const response = await axios.post('https://api.mcapocci.com.br/upload_img', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (response.status === 200) {
            alert("Imagens enviadas com sucesso!");
        } else {
            alert("Erro ao enviar imagens.");
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Erro ao enviar imagens.");
    }
}