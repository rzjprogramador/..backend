import { Dependencias } from "../../../Implementacao.ts";

export const dependencias_Dotnet: Dependencias = {
  tipo_do_arquivo_gerenciador_dependencias: "xml",

  arquivo_gerenciador_dependencias: "NomeProjeto.csproj",

  versao_da_plataforma_em_uso_neste_projeto_atual:
    "na tag <TargetFramework> // esta mostrando que esta usando a versao net7.0",

  configuracao_se_deve_checar_possiveis_valores_nulos:
    "<Nullable>enable</Nullable> // enable vai checar, disable nao vai checar se a variavel pode receber nulo.",
}