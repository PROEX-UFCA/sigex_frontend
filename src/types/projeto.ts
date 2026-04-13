export interface Projeto {
  id: string;
  id_coordenador: string;
  id_atividade: string;
  id_projeto: string;
  titulo: string;
  centro_departamento: string;
  data_inicio: string;
  data_fim: string;
  ano: number;
  tipo_acao: string;
  area_tematica: string;
  modalidade: string;
  status: number;
}

export type ProjetoCard = Pick<Projeto, 'id' | 'titulo'>