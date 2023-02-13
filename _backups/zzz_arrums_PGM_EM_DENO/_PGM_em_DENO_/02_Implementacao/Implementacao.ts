import { UniversalPGM_ou_ModernoDaLinguagem } from "../Use/ContratosGlobais/ContratosGlobais.ts";

interface ImplementacaoModel {
  projeto: Projeto;
  dependencias: Dependencias;
  import_export: Import_Export;
  arquivo_de_entrada_principal: Arquivo_Entrada_Principal;
  declaracoes_montagens: Declaracoes;
  logica: Logica;
  metodosDeTipos: MetodosDeTipos;
}

export interface Projeto {
  rodar_arquivo: string;
  templates_para_projeto_novo: string;
  especificacao_de_pasta_para_projeto: string;
  criar_projeto_novo: string;
  iniciar_modulos: string;
  gerenciador_de_pacotes: string;
}

export interface Arquivo_Entrada_Principal {
  sintaxe: string;
  metodo_principal: string;
  obrigatoriedade_metodo_principal: string;
  modularizacaoPersonalizada: string;
  importar_modulos_entre_arquivos: string;
}

export type Import_Export = {
  conceito: string;
  palavraChaveParaTornarExportavel: string;
  palavraChaveParaPoderImportar: string;
  acesso_entre_arquivos: UniversalPGM_ou_ModernoDaLinguagem;
};

type Verificacoes = {
  se_e_igual: UniversalPGM_ou_ModernoDaLinguagem;
  se_tem_valor_dentro_se_propriedade_e_diferente_de_nulo:
    UniversalPGM_ou_ModernoDaLinguagem;
};

export type Dependencias = {
  tipo_do_arquivo_gerenciador_dependencias: string;
  arquivo_gerenciador_dependencias: string;
  versao_da_plataforma_em_uso_neste_projeto_atual: string;
  configuracao_se_deve_checar_possiveis_valores_nulos: string;
};

export type Declaracoes = {
  que_pode_receber_nada_nulo: UniversalPGM_ou_ModernoDaLinguagem;
  que_nunca_podera_receber_nulo: UniversalPGM_ou_ModernoDaLinguagem;
};

export type MetodosDeTipos = {
  metodosParaStringsQueRetornamValor: MetodosParaStrings;
  metodosParaStringsQueTransformamSemRetornar: MetodosParaStrings;
};

export type Logica = {
  verificacoes: Verificacoes;
};

type MetodosParaStrings = {
  usar_mais_que_um_metodo_de_uma_vez: string;
  remover_espacos: string;
  transformar_em_maiusculo: string;
  transformar_em_minusculo: string;
};

export class Implementacao {
  constructor(
    private readonly p: ImplementacaoModel,
  ) {}
}
