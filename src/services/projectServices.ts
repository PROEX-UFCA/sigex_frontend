import type { Projeto } from "@/types";
import apiConnection from "@/services/api";

export const getProjects = (): Promise<Projeto[]> =>
  apiConnection.get("/acoes");
export const getProjectById = (id: string) => apiConnection.get(`/acoes/${id}`);

export const searchProjectsByTitle = async (term: string) => {
  const response = await apiConnection.get(`/acoes?titulo=${term}`);
  return response.data;
};
