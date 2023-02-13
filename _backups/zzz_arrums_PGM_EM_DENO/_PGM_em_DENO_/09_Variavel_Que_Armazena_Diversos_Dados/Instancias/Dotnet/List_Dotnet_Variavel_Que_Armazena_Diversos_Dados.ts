// deno-lint-ignore-file no-unused-vars ban-unused-ignore
import { Variavel_Que_Armazena_Diversos_Dados } from "../../Variavel_Que_Armazena_Diversos_Dados.ts";

const List_Dotnet_Variavel_Que_Armazena_Diversos_Dados =
  new Variavel_Que_Armazena_Diversos_Dados({
    nome: "List em dotnet",
    significado: "Variavel_Que_Armazena_Diversos_Dados",
    aplicabilidade:
      "armazenamento de diversos valores :: temos array sem limites, array com limite de items, e List a preferencia é usar List porque oferece diversos metodosPrototipos.",
    declaracao: "List<int> novosNumeros = new List<int>();",
    metodosPrototipos: "sim , desencadeados.",
    crud_adicionar: "metodoProto .Add( item ) para adicionar item na List",
    crud_acessar_individual: "#todo",
    crud_acessar_todos: "#todo",
    crud_atualizar: "#todo",
    crud_deletar: "#todo",
    acesso_item_individual: "lista[<posicao>] exemplo: array[0] obs: as posicoes de indice comecam com 0.",
    acesso_via_metodo:
      "para ler ou acessar os valores da List tem que usar o metodo de array : no caso: forEach ()",
    exemplo: `
  // exemplo criacao da List , add valores novos e mostrar o estado atual da List preenchida no Console.
  
      List<int> novosNumeros = new List<int>();
      novosNumeros.Add(11); 
      novosNumeros.Add(22);

      foreach (int v in novosNumeros) {
        Console.WriteLine(v); 
      }
      `,
  });
console.log(List_Dotnet_Variavel_Que_Armazena_Diversos_Dados);
