import { Comandos } from "./../comandos/Comandos.contracts";
import { TecnicaProps } from "./Tecnica.contracts.ts";
/**
 tecnica_programa:
  - pergunta_entrada:  a quem vai usar o programa.
  - estado: definicao DeValor Fixo Pela App.
  - resposta_processamento: vem do processamento de uma operacao entre a pergunta <operacao intervessao que traz resultado> e o item de valor fixo.
 */

export class Tecnica {
  constructor(
    private readonly tecnicaProps: TecnicaProps,
  ) {}
}
