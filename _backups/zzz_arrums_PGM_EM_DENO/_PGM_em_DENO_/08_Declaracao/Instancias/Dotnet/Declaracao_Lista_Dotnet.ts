import { Auxiliar } from "./../../../Use/Auxiliar.ts";
import { Declaracao } from "./../../Declaracao.ts";

const declaracao_Lista_Dotnet = new Declaracao({
  nome: "declaracao_Array_Dotnet",
  convencao:
    "o nome da variavel tem que ser no plural porque carrega mais que 1 valor.",
  formato_valores: Auxiliar.NAO_INFORMADO,
  sintaxe: `
  List< tipo > no = nome List< tipo >();
  `,
  exemplo: `
  List<int> novosNumeros = new List<int>();

  // usar membros para popular a lista
  novosNumeros.Add(11); 
  novosNumeros.Add(22);
  `,
});
console.log(declaracao_Lista_Dotnet);
