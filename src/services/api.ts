import axios from "axios";

const apiBaseURL = import.meta.env.VITE_API_BASE_URL;

if (!apiBaseURL) {
  throw new Error("Missing required environment variable: VITE_API_BASE_URL");
}

const apiConnection = axios.create({
  baseURL: apiBaseURL,
  headers: { "Content-Type": "application/json" },
});

export default apiConnection;
