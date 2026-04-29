import axios from "axios";

const apiConnection = axios.create({
  baseURL: "https://sigex.danielnasc.com.br/",
  headers: { "Content-Type": "application/json" },
});

export default apiConnection;
