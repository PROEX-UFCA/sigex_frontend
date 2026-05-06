import type { TagAttributes } from "@/types/tags";

export interface Project {
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
  img: string[] | string | null;
}

export interface ProjectProps {
  id: string;
  title: string;
  tags: TagAttributes[];
  description?: string | null;
  center?: boolean;
}