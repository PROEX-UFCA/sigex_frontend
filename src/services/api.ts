import axios from "axios";

const apiConnection = axios.create({
  baseURL: "https://sigex.danielnasc.com.br/api",
  // baseURL: "http://localhost:8001/api",
  headers: { "Content-Type": "application/json" },
});

export default apiConnection;
