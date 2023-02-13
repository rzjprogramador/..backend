import { Auxiliar } from "./../../../Use/Auxiliar.ts";
import { Declaracao } from "./../../Declaracao.ts";

const declaracao_Array_Dotnet = new Declaracao({
  nome: "declaracao_Array_Dotnet",
  convencao:
    "o nome da variavel tem que ser no plural porque carrega mais que 1 valor.",
  formato_valores: Auxiliar.NAO_INFORMADO,
  sintaxe: `
  <tipo> <simbolo_se_tiver> <nomeVariavelArray> = { valores , mais que 1 separados por virgula}
  `,
  exemplo: `
    string[] nomes = {"nome1", "nome2", "nome3"}
    int[] numeros = {2, 5, 7, 9}
  `,
});
console.log(declaracao_Array_Dotnet);
