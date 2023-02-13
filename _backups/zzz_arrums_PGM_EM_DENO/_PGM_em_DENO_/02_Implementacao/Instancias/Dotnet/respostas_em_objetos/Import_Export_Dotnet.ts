import { Import_Export } from "../../../Implementacao.ts";

export const Import_Export_Dotnet: Import_Export = {
  conceito:
    "o namespace é o objetoImportavel que da acesso aos membros de onde ele é importado a keyword using onde for usar",

  palavraChaveParaTornarExportavel:
    "namespace nomeDoObjetoExportavelQueSeraEnxergadoFora",

  palavraChaveParaPoderImportar: "using <nameSpaceImportavel>",

  acesso_entre_arquivos: {
    modo_universal_legado: "#todo",

    modo_moderno_linguagem: `usar clausula using nameSpaceDoExportado;
       O namespaces é um objeto que em putros arquivos importado com a clasula de importacao da acesso a qualquer membro :: variavel, funcao ou classe.`,

    exemplos: `
  // acesso a uma classe entre arquivos via namespace
  using objetoDoNameSpaceDoExportado;
  var cliente1 = new exemplo.Cliente();
  
  `,
  },
};
