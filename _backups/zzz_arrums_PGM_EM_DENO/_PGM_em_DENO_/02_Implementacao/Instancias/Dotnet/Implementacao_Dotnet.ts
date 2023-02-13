import { Implementacao } from "../../Implementacao.ts";
import { Import_Export_Dotnet } from "./respostas_em_objetos/Import_Export_Dotnet.ts";
import { declaracoes_Dotnet } from "./respostas_em_objetos/declaracoes_Dotnet.ts";
import { dependencias_Dotnet } from "./respostas_em_objetos/dependencias_Dotnet.ts";
import { logica_Dotnet } from "./respostas_em_objetos/logica_Dotnet.ts";
import { metodosDeTipo_Dotnet } from "./respostas_em_objetos/metodosDeTipo_Dotnet.ts";
import { arquivo_Entrada_Principal_Dotnet } from "./respostas_em_objetos/arquivo_Entrada_Principal_Dotnet.ts";
import { projeto_Dotnet } from "./respostas_em_objetos/projeto_Dotnet.ts";

const Implementacao_Dotnet = new Implementacao({
  projeto: projeto_Dotnet,
  dependencias: dependencias_Dotnet,
  import_export: Import_Export_Dotnet,
  arquivo_de_entrada_principal: arquivo_Entrada_Principal_Dotnet,
  logica: logica_Dotnet,
  declaracoes_montagens: declaracoes_Dotnet,
  metodosDeTipos: metodosDeTipo_Dotnet,
});

console.log(Implementacao_Dotnet);
