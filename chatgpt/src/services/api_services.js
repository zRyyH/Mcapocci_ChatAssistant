import axios from 'axios';

const api = 'https://api.mcapocci.com.br/'

export async function fetchData(dados) {
    try {
        const response = await axios.post(`${api}/get_gpt`, dados);
        return response.data
    } catch {
        return false
    }
};

export async function getConfig() {
    try {
        const response = await axios.get(`${api}/configs`);
        return response.data
    } catch {
        return false
    }
}