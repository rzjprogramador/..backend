import { ComandosEntradaLeitura_e_SaidaEscrita } from "../Comandos.ts";
import { AmbienteSaidaComando, TipoComando } from "../Comandos.contracts.ts";
import { Linguagens } from "../../linguagens/Linguagens.contracts.ts";

const comandoEntradaLeituraConsoleCSharpe = new ComandosEntradaLeitura_e_SaidaEscrita(
  {
    linguagem: Linguagens.CSHARPE,
    ambienteSaidaComando: AmbienteSaidaComando.CONSOLE,
    tipoComando: TipoComando.ENTRADA_LEITURA,
    codeComando: "Console.ReadLine()",
    retorna: "retorna o que foi enviado via ambienteSaidaComando <console>",
  },
);

const comandoEntradaLeituraConsoleTypescript =
  new ComandosEntradaLeitura_e_SaidaEscrita({
    linguagem: Linguagens.TYPESCRIPT,
    ambienteSaidaComando: AmbienteSaidaComando.CONSOLE,
    tipoComando: TipoComando.ENTRADA_LEITURA,
    codeComando: "prompt()",
    retorna: "retorna o que foi enviado via ambienteSaidaComando <console>",
  });

console.log(comandoEntradaLeituraConsoleCSharpe);
console.log(comandoEntradaLeituraConsoleTypescript);
