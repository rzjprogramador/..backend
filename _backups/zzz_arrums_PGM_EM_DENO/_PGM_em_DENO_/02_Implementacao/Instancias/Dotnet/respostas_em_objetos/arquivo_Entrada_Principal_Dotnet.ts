import { Arquivo_Entrada_Principal } from "../../../Implementacao.ts";

export const arquivo_Entrada_Principal_Dotnet: Arquivo_Entrada_Principal = {
  sintaxe: `
  - obs: apartir de 2023 do dotnet7 nao é obrigatorio o namespace, class Principal e o Main() -- posso iniciar direto no codigo.

  // segue estrutura se optar por usar namespace,classe e metodo principal.

    - namespace NomeNameSpace; // obs: antes da versao7 precisava de bloco englobando tudo ..agora o nome do namespace seguido de ; ja basta.

    public class NomeClasse { 
      public static void Main(string[] args) 
    } 

    // obs: a classe principal pode ser public para ser enxergue por outros projetos.
    
    // o que ofereceremos sao objetos dentro do outro com uma funcao no ultimo que é o acessivel fora"
    `,

  metodo_principal: `
  é opcional :: public static void Main(string[] args)  // igual do java...
  // explicado: somente um arquivo no app pode ter este metodo de entrada ...é o ponto de partida da app ..o metodo Main tem que ser statico tambem porque nao podemos ter metodos nao staticos dentro de uma classe statica. e este metodo tem que ser unico no app.`,

  obrigatoriedade_metodo_principal:
    "na funcao principal o local tem que ser <static> para nao ser criados varios outros pontos de partida da app",

  modularizacaoPersonalizada:
    "utilize o name space para modular as classes e serem acessiveis em arquivos diferentes",

  importar_modulos_entre_arquivos:
    `crie name space, classe e metodo Statico Exportavel :: chame em outro arquivo pelo namespace que sera um objeto de acesso a classe em questao. `,
}

