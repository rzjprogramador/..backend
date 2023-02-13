import { Funcoes_Loop_De_Array } from "../../Funcoes_Loop_De_Array.ts";

const ForEach_Funcoes_Loop_De_Array = new Funcoes_Loop_De_Array({
  nome: "forEach ()",
  significado: "para cada item faca algo",
  forma_de_chamada: "Invocavel ()",
  sintaxe:
    "foreach ( tipoValores valorIterado in array ) {    COMANDO DESEJADO ( valorIterado ); }",
  aplicabilidade: "acessos_ao_array: para leituras e escritas em cada item",
  exemplo: `
  // array e metodo: forEach() de acessos_ao_array: para leituras e escritas em cada item
  int[] numeros = {1, 2, 3, 4};

  foreach(int v in numeros) {
    Console.WriteLine(v);
  }

  // acesso_individual por posicao ao indice do array
  // Console.WriteLine(numeros[0]);
  `,
});
console.log(ForEach_Funcoes_Loop_De_Array);
