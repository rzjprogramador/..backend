import { ComandosEntradaLeitura_e_SaidaEscrita } from "../Comandos.ts";
import { AmbienteSaidaComando, TipoComando } from "../Comandos.contracts.ts";
import { Linguagens } from "../../linguagens/Linguagens.contracts.ts";

export const comandoEscritaSaidaConsoleCSharpe =
  new ComandosEntradaLeitura_e_SaidaEscrita(
    {
      linguagem: Linguagens.CSHARPE,
      ambienteSaidaComando: AmbienteSaidaComando.CONSOLE,
      tipoComando: TipoComando.SAIDA_ESCRITA,
      codeComando: "Console.WriteLine()",
      retorna:
        "faz a leitura do que for argumentado...e mostra no ambiente de saida <console>",
    },
  );

console.log(comandoEscritaSaidaConsoleCSharpe);
