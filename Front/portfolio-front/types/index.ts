export interface Perfil {
  nome: string;
  bio: string;
  email: string;
  linkedin: string;
  github: string;
  foto: string;
  cv: string;
}

export interface Experiencia {
  id: number;
  empresa: string;
  cargo: string;
  descricao: string;
  tecnologias_usadas: string;
  data_inicio: string;
  data_fim?: string;
  atual: boolean;
}

export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  tecnologia: string;
  capa: string;
  link_github: string;
}