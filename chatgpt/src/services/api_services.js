import axios from 'axios';

export async function fetchData(dados) {
    try {
        const response = await axios.post('https://api.mcapocci.com.br/get_gpt', dados);
        return response.data
    } catch {
        return false
    }
};

export async function getConfig() {
    try {
        const response = await axios.get('https://api.mcapocci.com.br/configs');
        return response.data
    } catch {
        return false
    }
}