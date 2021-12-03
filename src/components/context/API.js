import axios from 'axios';

export default axios.create({
    baseURL: `https://api.halokonsultan.me/api/`
});