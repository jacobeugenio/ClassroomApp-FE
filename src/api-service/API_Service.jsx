import axios from "axios";

const API_Service = axios.create({
  baseURL: "https://classroom-app-be.vercel.app",
  withCredentials: true,
});

export default API_Service;
