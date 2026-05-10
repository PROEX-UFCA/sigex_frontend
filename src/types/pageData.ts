import type { Project } from "@/types/project";

/**
 * Estrutura de resposta paginada da API ao buscar projetos.
 *
 * @property data         - Array de projetos da página atual.
 * @property current_page - Número da página atual (1-indexado).
 * @property last_page    - Número da última página disponível.
 */
export interface PageData {
  data: Project[];
  current_page: number;
  last_page: number;
}