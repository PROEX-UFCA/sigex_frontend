import apiConnection from "./api";

export const getProjects = () => apiConnection.get('/acoes')