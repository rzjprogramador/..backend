import { Projeto } from "../../../Implementacao.ts";
import { Auxiliar } from "./../../../../Use/Auxiliar.ts";

export const projeto_Dotnet: Projeto = {
  rodar_arquivo:
    "dotnet run </caminhoArquivo/arquivo.cs>  // posso rodar qualquer arquivo mas somente 1 pode ter a funcao Main() se optar por usar ",
  templates_para_projeto_novo:
    "com dotnet new vamos ver todos na coluna <shorts NOmes Curtos> mostrara todos templates de projeto disponivel",
  especificacao_de_pasta_para_projeto:
    "crie a pasta que vai querer ser o nome do projeto, rode o comando_de_criacao, ele vai criar um projeto console com o nome da pasta onde esta dentro",
  criar_projeto_novo: " ```dotnet new <templateProjeto ex: console>``` // observacao ele assume o nome da pasta como default, se quiser muda ja dar um outro nome use a flag :: -n <NomeEscolhido>",
  iniciar_modulos: Auxiliar.NAO_INFORMADO,
  gerenciador_de_pacotes:
    "do dotnet 7 do ano de 2023 para frente é gerado um json para gerenciar as dependencias de pacotes utilizados ... do dotnet6 do ano de 2021 para baixo era gerado um xml com NomeProjeto.csproj",
};
