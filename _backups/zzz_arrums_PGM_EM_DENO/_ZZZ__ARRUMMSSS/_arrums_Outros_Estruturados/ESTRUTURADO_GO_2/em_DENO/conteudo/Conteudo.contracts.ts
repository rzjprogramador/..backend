export interface PropsConteudo {
  quantidade: "singular" | "composto";
  de_origem: "primitiva_nativa" | "Personalizada_SubjacenteNAtivos";
  nomeConteudo: "texto" | "numeroInteiro" | "numeroDecimal" | "boleano";
  alocacaoNaMemoria: "de_Conteudo" | "de_Referencia";
  sinonimos: InformarTexto[];
  no_ambiente_sem_escopo: InformarTexto;
  no_ambiente_escopo_classe: InformarTexto;
  representacao_classe_Da_Plataforma: Primitivos;
  representacao_instancias: Primitivos;
  descobrir_Conteudo_Zero: InformarTexto;
  ConteudoZero: "null" | "0";
  semConteudo: "null" | "0";
  membrosDNAPrototipo_de_leitura: MembrosProto_DeLeitura[];
  membrosDNAPrototipo_de_escrita: MembrosProto_DeEscrita[];
}
export enum Primitivos {
  TEXTO = "String | string",
  NUMERO_INTEIRO = "Int | int",
  NUMERO_DECIMAL = "Decimal | decimal | double",
  BOLEANO = "Bool | bool",
  OBJETO = "Object | object",
}

type InformarTexto = "Ainda_Nao_informado" | string;

interface MembrosProto_DeLeitura {
  nomeMembro: InformarTexto;
  essencia: InformarTexto;
  conceitos: InformarTexto;
  beneficios: InformarTexto;
  exemplos: InformarTexto;
}

interface MembrosProto_DeEscrita {
  nomeMembro: InformarTexto;
  essencia: InformarTexto;
  conceitos: InformarTexto;
  beneficios: InformarTexto;
  exemplos: InformarTexto;
}
