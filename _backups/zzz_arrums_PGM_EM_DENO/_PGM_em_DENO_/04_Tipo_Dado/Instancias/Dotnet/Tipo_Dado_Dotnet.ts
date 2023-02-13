import { Tipo_Dado } from "../../Tipo_Dado.ts";
import { Auxiliar } from "../../../Use/Auxiliar.ts";

const Tipo_Dado_Dotnet = new Tipo_Dado({
  significado:
    "Tipos sao como se fosse a Familia que o dado pertence, tem origem de classe statica que gera a cada tipo e suas instancias staticas unicas membros (propriedades e metodos) de leitura GET e escrita SET",
  conceito:
    "em minuscula o tipo instancia e em maiuscula a classe do Tipo que originou as instancias do objeto pai System ex: System.Boolean tem a instancia statica:: boolean",
  boleano: "boolean || Boolean",
  caractere_texto: "char || Char",
  texto: "string || String",
  numero_Inteiro: "int32, int64 || Int32, Int64",
  numero_Decimal: "decimal, float, double || Decimal, Float, Double",
  diferenciacao_numero_positivo_negativo: Auxiliar.NAO_POSSUI,
});

console.log(Tipo_Dado_Dotnet);
