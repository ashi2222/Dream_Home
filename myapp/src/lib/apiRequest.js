import axios from "axios";

const apiRequest = axios.create({
    baseURL : "https://dream-home-api-9f0j.onrender.com",
    withCredentials : true,
});

export default apiRequest ;
