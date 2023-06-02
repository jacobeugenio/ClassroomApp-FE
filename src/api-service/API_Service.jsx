import axios from "axios";

const API_Service = axios.create({
  baseURL: "http://localhost:5000",
});

export default API_Service;
