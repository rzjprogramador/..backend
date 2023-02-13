import { Formatacao } from "../../Formatacao.ts";

const Formatacao_Dotnet = new Formatacao({
  template_string: {
    conceito:
      "aqui para interpolar tambem tem que colocar o $ dolar na frente das 3 aspas ... mas nas variaveis que nao pulam linhas nao precisa das 3 aspas para interpolar só do $dolar ...:: conhecida tecnicamente por Literal de cadeia de caracteres.",
    sintaxe: " 3 aspas duplas ",
    pular_linhas_dentro_da_string:
      "3 aspas duplas coloca o texto dentro e pula as linhas.",

    exemplos: `
      // UNIVERSAL PULAR LINHAS: Fechar par de aspas duplas e SINAL DE MAIS .... cada linha significa abre e fecha de aspas duplas mesmo que seja vazia vai pular a linha no Legado ou pra linguagem que nao tem template string

      var interpolada = $"LEGADO pular linhas A CADA LINHA NO FIM DAS ASPAS COLOCAVA O + " +
    "PULEI VAI VIR OUTRO MAIS APOS ASPAS >> " +
    "PULEI A TERCEIRA E CHEGA !!!";

    // NOVA FORMA : TEMPLATE_STRING:
    
    var interpolada = $"""
    inserido 3 aspas duplas e posso pular de linha avontade esta é a linha1
    ESTA É MINHA VAR INTERPOLADA >> {variavel}
    linha 2 aqui
    linha 3 aqui
    chega !!!
    """;    
    `,
  },
  interpolar: {
    interpolar_variavel_com_string_Universal:
      '$"meu texto aspas e sinal de mais e a var" + variavel',

    interpolar_variavel_com_string_Moderno:
      'cifrao antes das aspas duplas e chaves {variavel} // ex: $"meu texto \{variavel\} continua textos" ',

    exemplos: ``,
  },
  concatenar: {
    concatenar_variavel_com_string_Universal:
      '$" meu texto aspas e sinal de mais e a var" + variavel',

    concatenar_variavel_com_string_Moderno: '$"{variavel\} {outraVariavel\}',

    exemplos: `
    // UNIVERSAL
    var interpolada = $"LEGADO pular linhas A CADA LINHA NO FIM DAS ASPAS COLOCAVA O + " +
    "PULEI VAI VIR OUTRO MAIS APOS ASPAS >> " +
    "PULEI A TERCEIRA E CHEGA !!!";
    
    var interpolada = $"o valor da minha variavel é :: {variavel} mais textos{outraVariavel}";
    
    `,
  },

  escapes: {
    escapar_json_na_string:
      `para scapar json ou objeto literal na string usar 2 dolar ex: $$" texto " ou $$"""texto pula """ `,

    escapar_variavel_na_string_que_tem_json:
      `utilizar 2 dolar $$ antes e 2 chaves onde esta interpolando a var ex: {{variavel}}
      `,

    exemplos: `  
    /*
    // DO MODO UNIVERSAL LEGADO :: TERIA QUE COLOCAR BARRA ANTES DE CADA CARACTERE QUE QUER ESCAPAR.

    // ESCAPANDO CHAVES DO JSON OBJETO LITERAL E DA VARIAVEL INTERPOLADA ONDE TEM JSON ::

    var interpolada_ou_concatenada = $$"""
    escapar template json escapando chaves e interpolacao ao copiar para a string o json :
    solucao usar 2 $$ dolar ants das aspas  e 2  na chaves nal interpolada onde tem json na string
      exemplo de json aqui na string  {"chave": "valor" } ele sozinho nao consegue escapar as chaves ...este foi um json ou objetoLiteral esta é uma var agora cque tem json {{varNovaOndeTemJson}}
     """;
    */
    `,
  },
});

console.log(Formatacao_Dotnet);
