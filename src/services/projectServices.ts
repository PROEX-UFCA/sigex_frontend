import apiConnection from "./api";

export const getProjects = () => apiConnection.get("/acoes");
export const getProjectById = (id: string) => apiConnection.get(`/acoes/${id}`);
