import axios from "axios";

const apiConnection = axios.create({
  baseURL: "https://sigex.danielnasc.com.br/api",
  headers: { "Content-Type": "application/json" },
});

export default apiConnection;
