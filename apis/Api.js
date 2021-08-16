import axios from "axios";
const Api = axios.create({
    baseURL: 'http://localhost:9090/'
});

export default Api;