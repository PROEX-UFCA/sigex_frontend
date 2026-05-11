/**
 * Filtros disponíveis para busca de projetos na API.
 *
 * Todos os campos são opcionais; omitir um campo equivale a não filtrar por ele.
 *
 * @property titulo        - Busca por termo no título do projeto.
 * @property tipo_acao     - Filtra por tipo de ação (ex.: `"Curso"`, `"Evento"`).
 * @property area_tematica - Filtra por área temática (ex.: `"Tecnologia"`).
 * @property data_inicio   - Filtra projetos com início após esta data (`YYYY-MM-DD`).
 * @property data_fim      - Filtra projetos com término antes desta data (`YYYY-MM-DD`).
 * @property page          - Número da página para paginação (1-indexado).
 */
export interface ProjectFilters {
  titulo?: string;
  tipo_acao?: string;
  area_tematica?: string;
  data_inicio?: string;
  data_fim?: string;
  page?: number;
  modalidade?: string;
}
