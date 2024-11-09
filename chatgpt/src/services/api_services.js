import axios from 'axios';

export async function fetchData(dados) {
    try {
        const response = await axios.post('http://awpsoft.com.br:2000/get_gpt', dados);
        return response.data
    } catch {
        return false
    }
};

export async function getConfig() {
    try {
        const response = await axios.get('http://awpsoft.com.br:2000/configs');
        return response.data
    } catch {
        return false
    }
}