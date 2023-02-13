import { Conteudo } from "../Conteudo.ts";
import { Primitivos } from "../Conteudo.contracts.ts";

export const texto = new Conteudo(
  {
    quantidade: "singular",
    de_origem: "primitiva_nativa",
    nomeConteudo: "texto",
    alocacaoNaMemoria: "de_Referencia",
    sinonimos: ["Ainda_Nao_informado"],
    no_ambiente_sem_escopo: "Ainda_Nao_informado",
    no_ambiente_escopo_classe: "Ainda_Nao_informado",
    representacao_classe_Da_Plataforma: Primitivos.TEXTO,
    representacao_instancias: Primitivos.TEXTO,
    ConteudoZero: "null",
    semConteudo: "null",
    descobrir_Conteudo_Zero: "Ainda_Nao_informado",
    membrosDNAPrototipo_de_leitura: [
      {
        nomeMembro: "Ainda_Nao_informado",
        essencia: "Ainda_Nao_informado",
        conceitos: "Ainda_Nao_informado",
        beneficios: "Ainda_Nao_informado",
        exemplos: "Ainda_Nao_informado",
      },
    ],
    membrosDNAPrototipo_de_escrita: [
      {
        nomeMembro: "Ainda_Nao_informado",
        essencia: "Ainda_Nao_informado",
        conceitos: "Ainda_Nao_informado",
        beneficios: "Ainda_Nao_informado",
        exemplos: "Ainda_Nao_informado",
      },
    ],
  },
);

console.log(texto);
