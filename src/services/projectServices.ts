import type { ProjectFilters, Project, PageData } from "@/types";
import apiConnection from "@/services/api";

/**
 * Busca a lista de projetos sem filtros aplicados.
 *
 * @returns Array de {@link Project} ou array vazio em caso de erro.
 *
 * @example
 * const projetos = await getProjects();
 */
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

/**
 * Busca um projeto específico pelo seu ID.
 *
 * @param id - Identificador único do projeto.
 * @returns O {@link Project} encontrado, ou `null` em caso de erro/não encontrado.
 *
 * @example
 * const projeto = await getProjectByID("123");
 */
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

/**
 * Busca projetos aplicando filtros opcionais, com suporte a paginação.
 *
 * Esta função possui duas sobrecargas:
 * - Quando `getAllData` é `true`, retorna o objeto completo {@link PageData}
 *   (incluindo metadados de paginação).
 * - Quando `getAllData` é `false` ou omitido, retorna apenas o array de projetos.
 *
 * Se nenhum filtro for fornecido, retorna um array vazio imediatamente
 * sem realizar chamada à API.
 *
 * @param filters    - Objeto com os filtros a serem aplicados. Ver {@link ProjectFilters}.
 * @param getAllData  - Se `true`, retorna {@link PageData}. Padrão: `false`.
 *
 * @example
 * // Apenas projetos
 * const projetos = await searchProjectsByFilter({ area_tematica: "Tecnologia" });
 *
 * // Com dados de paginação
 * const pageData = await searchProjectsByFilter({ titulo: "extensão", page: 2 }, true);
 */
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
  if (filters.modalidade) params.modalidade = String(filters.modalidade);

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
