import { Declaracao } from "./../../Declaracao.ts";

const declaracao_Programa_Dotnet = new Declaracao({
  nome: "declaracao_Programa_Dotnet",
  convencao: "use o nome das variaveis em SnackCase, menos o namespace que pode ser camelCase ",
  formato_valores: "o tipo dos valores tem que ser o mesmo passado na declaracao",
  sintaxe: `
  um objeto dentro do outro ... e no ultimo uma funcao que sera usada pelo utilizador que chamar este programa ::

  namespace <nomeNameSpace> {
    class <NomeClasse> {
      <local> <retornoDaFuncao> <NomeFuncao> () 
      { 
        // consequencia_Verdade faça isto ::
        Console.WriteLine("Hello Word");    
      }
    }
  }
  `,
  exemplo: `
  namespace main {
    class Program {
      static void Main () 
      {   
        Console.WriteLine("Hello Word");    
      }
    }
  }
  `,
});
console.log(declaracao_Programa_Dotnet);
