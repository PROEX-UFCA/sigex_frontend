import type { Projeto } from "@/types";
import apiConnection from "@/services/api";

export const getProjects = (): Promise<Projeto[]> =>
  apiConnection.get("/acoes");

interface ProjectFilters {
  titulo?: string;
  tipo_acao?: string;
  area_tematica?: string;
  data_inicio?: string;
  data_fim?: string;
}

export const searchProjectsByFilter = async (filters: ProjectFilters) => {
  const params: Record<string, string> = {};

  if (filters.titulo) params.titulo = filters.titulo;
  if (filters.tipo_acao) params.tipo_acao = filters.tipo_acao;
  if (filters.area_tematica) params.area_tematica = filters.area_tematica;
  if (filters.data_inicio) params.data_inicio = filters.data_inicio;
  if (filters.data_fim) params.data_fim = filters.data_fim;

  try {
    const response = await apiConnection.get("/acoes", { params });
    const projects = response?.data?.data?.data;
    console.log(projects);
    console.log(response);
    console.log(response.data);
    console.log(response.data?.data);
    console.log(response.data?.data?.data);
    
    if (!projects) return [];
    return projects;
  } catch (error) {
    console.error(error);
    return [];
  }
};
