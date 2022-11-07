import axios from "axios";

const api = axios.create({
  baseURL: "http://reg.vubis.com.br:3002"
});


export default api;