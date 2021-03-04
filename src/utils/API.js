import axios from 'axios';

export default axios.create({

    // LOCAL PATH
    baseURL : "http://localhost:8000/api/v1/",
    // SERV PATH
    //baseURL: "api.lumina.cda4.lh.manusien-ecolelamanu.fr/api/v1/",
    responseType: "json"
})