import type { TagAttributes } from "@/types/tags";

/**
 * Representa um projeto/ação de extensão retornado pela API.
 *
 * @property id               - Identificador único do projeto.
 * @property id_coordenador   - ID do coordenador responsável.
 * @property id_atividade     - ID da atividade associada.
 * @property id_projeto       - ID interno do projeto na base de dados.
 * @property titulo           - Título do projeto.
 * @property centro_departamento - Centro ou departamento vinculado.
 * @property data_inicio      - Data de início no formato `YYYY-MM-DD`.
 * @property data_fim         - Data de término no formato `YYYY-MM-DD`.
 * @property ano              - Ano de referência do projeto.
 * @property tipo_acao        - Tipo da ação (ex.: "Curso", "Evento", "Projeto").
 * @property area_tematica    - Área temática principal (ex.: "Tecnologia").
 * @property modalidade       - Modalidade de execução (presencial, remota etc.).
 * @property status           - Código numérico de status (ativo, encerrado etc.).
 * @property img              - URL(s) de imagem do projeto, ou `null` se ausente.
 */
export interface Project {
  id: string;
  id_proponente: string;
  id_projeto: string;
  titulo: string;
  palavras_chave: string;
  resumo: string;
  centro_departamento: string;
  com_bolsa: string;
  ods: string;
  data_inicio: string;
  data_fim: string;
  ano: number;
  tipo_acao: string;
  area_tematica: string;
  modalidade: string;
  situacao: string;
  status: number;
  img: string[] | string | null;
}

/**
 * Props compartilhadas pelos componentes de card de projeto
 * ({@link BigProject} e {@link SmallProject}).
 *
 * @property id          - Identificador do projeto (usado na navegação).
 * @property title       - Título exibido no card.
 * @property tags        - Array de tags para exibição visual.
 * @property description - Descrição curta (opcional, usada em `BigProject`).
 * @property center      - Se `true`, centraliza o texto do card. Padrão: `false`.
 */
export interface ProjectProps {
  id: string;
  title: string;
  tags: TagAttributes[];
  description?: string | null;
  center?: boolean;
}

/**
 * Props do componente {@link ProjectGallery}.
 *
 * @property imageURL - Array de URLs das imagens da galeria do projeto.
 */
export interface ProjectImages {
  imageURL: string[];
}