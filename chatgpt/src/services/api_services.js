import axios from 'axios';

const fetchData = async (text, id) => {
    try {
        console.log(text, id)
        const response = await axios.post('http://awpsoft.com.br:15000/get_gpt', {
            user_input: String(text),
            user_id: String(id)
        });

        if (response.data) return response.data
    } catch {
        return false
    } return false
};

export default fetchData;