import { comandoEscritaSaidaConsoleCSharpe } from "../../comandos/instancias/comandos_de_SAIDA_Escrita_console.ts";
import { Tecnica } from "../Tecnica.ts";

const tecnica_01_Base_Programa = new Tecnica({
  conceito: `
  tecnica_programa:
  - pergunta_entrada:  a quem vai usar o programa.
  - estado: definicao DeValor Fixo Pela App.
  - resposta_processamento: vem do processamento de uma operacao entre a pergunta <operacao intervessao que traz resultado> e o item de valor fixo.
  `,

  entrada: "pergunta_entrada:  a quem vai usar o programa",

  resposta_processamento:
    "vem do processamento de uma operacao entre a pergunta <operacao intervessao que traz resultado> e o item de valor fixo.",

  saida: "Mostrar na Tela o resultado.",
});

console.log(tecnica_01_Base_Programa);
