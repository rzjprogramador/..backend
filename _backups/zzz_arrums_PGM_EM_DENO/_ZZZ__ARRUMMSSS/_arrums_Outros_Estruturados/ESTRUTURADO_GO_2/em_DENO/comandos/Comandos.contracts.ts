import { Linguagens } from "../linguagens/Linguagens.contracts.ts";

export interface Comandos {
  linguagem: Linguagens;
  ambienteSaidaComando: AmbienteSaidaComando;
  tipoComando: TipoComando;
  codeComando: string;
  retorna: string;
}

export enum AmbienteSaidaComando {
  CONSOLE = "console",
  HTML = "html",
}

export enum TipoComando {
  ENTRADA_LEITURA =
    "ENTRADA :: Read :: Leitura _para ler informacao :: Recebe uma Pergunta",
  SAIDA_ESCRITA =
    "SAIDA :: Write :: Escrever _para escrever informacao :: Envia uma Resposta",
}
