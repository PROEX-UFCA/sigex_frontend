import type { ProjectFilters, Project, PageData } from "@/types";
import apiConnection from "@/services/api";

export const getProjects = async (): Promise<Project[]> => {
  try {
    const data = await apiConnection.get("/acoes");

    const projectList: Project[] = data.data.data.data;

    return projectList;
  } catch (error) {
    console.error("ERRO AO BUSCAR PROJETOS!", error);
    return [];
  }
};

export const getProjectByID = async (id: string): Promise<Project | null> => {
  try {
    const data = await apiConnection.get(`/acoes/${id}`);

    const project: Project = data.data.data;

    return project;
  } catch (error) {
    console.error("ERRO AO PEGAR INFORMAÇÕES DO PROJETO!", error);
    return null;
  }
};

export async function searchProjectsByFilter(
  filters: ProjectFilters,
  getAllData: true,
): Promise<PageData>;
export async function searchProjectsByFilter(
  filters: ProjectFilters,
  getAllData?: false,
): Promise<Project[]>;
export async function searchProjectsByFilter(
  filters: ProjectFilters,
  getAllData: boolean = false,
): Promise<PageData | Project[]> {
  const params: Record<string, string> = {};

  if (filters.titulo) params.titulo = filters.titulo;
  if (filters.tipo_acao) params.tipo_acao = filters.tipo_acao;
  if (filters.area_tematica) params.area_tematica = filters.area_tematica;
  if (filters.data_inicio) params.data_inicio = filters.data_inicio;
  if (filters.data_fim) params.data_fim = filters.data_fim;
  if (filters.page) params.page = String(filters.page);

  if (!Object.keys(params).length) return [];

  try {
    const response = await apiConnection.get("/acoes", { params });
    const projects = getAllData
      ? response?.data?.data
      : response?.data?.data?.data;

    if (!projects) return [];
    return projects;
  } catch (error) {
    console.error(error);
    return [];
  }
}
