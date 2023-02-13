import { Configuracoes } from "../configuracoes/Configuracoes.contracts.ts";
import { Linguagens } from "../linguagens/Linguagens.contracts.ts";

export interface Plataforma {
  nome: string;
  proprietario: Proprietarios;
  linguagens: Linguagens[];
  configuracoes: Configuracoes;
}

export enum Proprietarios {
  GOOGLE = "GOOGLE",
  MICROSOFT = "MICROSOFT",
  ORACLE = "ORACLE",
}
