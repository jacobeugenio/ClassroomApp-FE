import axios from "axios";

const API_Service = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export default API_Service;
