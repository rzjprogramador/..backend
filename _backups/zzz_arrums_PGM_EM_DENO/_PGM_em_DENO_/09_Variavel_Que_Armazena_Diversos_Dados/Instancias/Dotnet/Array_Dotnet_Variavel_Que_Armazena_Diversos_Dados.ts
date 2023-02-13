// deno-lint-ignore-file no-unused-vars ban-unused-ignore
import { Variavel_Que_Armazena_Diversos_Dados } from "../../Variavel_Que_Armazena_Diversos_Dados.ts";

const Array_Dotnet_Variavel_Que_Armazena_Diversos_Dados =
  new Variavel_Que_Armazena_Diversos_Dados({
    nome: "",
    significado: "Variavel_Que_Armazena_Diversos_Dados",
    aplicabilidade: "#TODO",
    declaracao: "int[] numeros = {1, 2, 3, 4};",
    metodosPrototipos: "#TODO",
    crud_adicionar: "#TODO",
    crud_acessar_individual: "#TODO",
    crud_acessar_todos: "#TODO",
    crud_atualizar: "#TODO",
    crud_deletar: "#TODO",
    acesso_item_individual:
      "array[<posicao>] exemplo: array[0] obs: as posicoes de indice comecam com 0.",
    acesso_via_metodo: `
    // acessos_ao_array: para leituras e escritas em cada item

    funcao forEach( 
      <recebe uma variavel_Iteradora_Inventada >
       <com a plavra_chave in vai no array alvo e itera ate o seu final > 
       <passamos o array alvo>)

    `,
    exemplo: `
    // acessos_ao_array: para leituras e escritas em cada item
        foreach(int v in numeros) {
          Console.WriteLine(v); // metodo de saida ( passando o valor da varIteradora no momento)
        }
    `,
  });
console.log(Array_Dotnet_Variavel_Que_Armazena_Diversos_Dados);
