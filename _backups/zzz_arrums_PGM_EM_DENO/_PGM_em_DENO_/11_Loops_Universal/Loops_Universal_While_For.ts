// deno-lint-ignore-file no-unused-vars

class Loops_Universal_While {
  private static nome = "while ()";

  private static designerSemelhanca =
    "funcao // semelhante a condicional if a diferenca que a consequencia sera repetida até a condicaoPassada se tornar falsa.";

  private static significado =
    "Enquanto a condicao passada for verdade … { faça esta consequencia }";

  private static aplicabilidade =
    "repetir qualquer tipo de instrucao desejada.";

  private static declaracao_Explicada =
    "a var n que vem de fora tem um valor inicial, no while enquanto este param que vem de fora for verdade ele vai fazer a consequencia dentro do {} bloco. ";

  private static consequencia =
    "dentro do bloco entao a cada rodagem do loop defino o incremento do param para ele atingir o valor falso para a condicao assim a rodagem do loop para senao tiver esta valvula de escape entra em loop infinito e trava a maquina.";

  private static sintaxe = `
    var var_De_fora_QUe_Sera_OParametro = valor;
    while (<condicaoLogica sobre a var_De_fora_QUe_Sera_OParametro>) { 
      <façaIsto>
      <valvulaEscape que torna a condicaoFalsa>
        }
        `;

  private static exemplo = `
    // while - enquanto Condicao verdade faça ::

    var n = 5;

    while(n <= 10) {
      Console.WriteLine(n);
      n++;
    }
    `;
}

// console.log(Loops_Universal_While);

/* *************************************************** */

class Loops_Universal_DoWhile {
  private static diferenca_para_o_while:
    "a diferenca para o while que executa o loop antes ... #todo terminar explicacao.";
  private static sintaxe: "#todo terminar explicacao.";
  private static exemplo: "#todo terminar explicacao.";
}

// console.log(Loops_Universal_DoWhile);

/* *************************************************** */

// class Loops_Universal_For {
//   private static nome: "";
//   private static designerSemelhanca: "";
//   private static significado: "";
//   private static aplicabilidade: "";
//   private static declaracao_Explicada: "";
//   private static consequencia: "";
//   private static sintaxe: "";
//   private static exemplo: "";
// }

// console.log(Loops_Universal_For);

/* *************************************************** */
