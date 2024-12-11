import axios from 'axios';

export async function fetchData(path, dados) {
    try {
        const response = await axios.post(`${path}/get_gpt`, dados);
        return response.data
    } catch {
        return false
    }
};

export async function getConfig(path) {
    try {
        const response = await axios.get(`${path}/configs`);
        return response.data
    } catch {
        return false
    }
}