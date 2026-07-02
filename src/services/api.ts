import axios from "axios";

/**
 * Instância Axios pré-configurada para comunicação com a API do SigEx.
 *
 * Define a URL base e os headers padrão para todas as requisições.
 * A `baseURL` pode ser externalizada via variável de ambiente
 * `VITE_API_URL` (linha comentada) para diferentes ambientes (dev, prod).
 *
 * @example
 * import apiConnection from "@/services/api";
 * const response = await apiConnection.get("/acoes");
 */
const apiConnection = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  //baseURL: "https://sigex.danielnasc.com.br/api",
  // baseURL: "http://localhost:8000/api",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
  withXSRFToken: true,
});

export default apiConnection;
