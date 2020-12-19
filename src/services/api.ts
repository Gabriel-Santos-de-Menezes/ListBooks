import axios from 'axios';

const api = axios.create({baseURL: "https://scot13.tst.marttech.com.br/api/"});

export default api;