import axios from 'axios';

export async function setConfigs(dados) {
    try {
        const resposta = await axios.post('http://awpsoft.com.br:2000/set_configs', dados);
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
        const resposta = await axios.get('http://awpsoft.com.br:2000/configs');
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
        const response = await axios.post('http://awpsoft.com.br:2000/upload_img', formData, {
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