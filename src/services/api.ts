import axios from "axios";

if (!apiBaseURL) {
  throw new Error("Missing required environment variable: VITE_API_BASE_URL");
}

const apiConnection = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: { "Content-Type": "application/json" },
});

export default apiConnection;
