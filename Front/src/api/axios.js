import axios from "axios";

const instance = axios.create({
    /* baseURL: 'http://localhost:3090/api', */
    baseURL: 'https://magyprintback.onrender.com/api'
})



export default instance
