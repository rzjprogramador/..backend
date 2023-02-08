
namespace conceitos;

public class Interpolacao {
  public static string Execute() {
    // concatenar interpolar strings com variaveis
    var variavel = "ValorDaVar";

    // var interpolada_ou_concatenada = $"o valor da minha variavel é :: {variavel}";

    // var interpolada_ou_concatenada = "LEGADO interpolacao/concatenacao o valor é :: " + variavel;

    // var interpolada_ou_concatenada = @"LEGADO o arroba éra para escapar barra, o valor é :: {variavel} OBS: PRECISAVA DE 2 BARRAS TBM PARA SCAPE DA BARRA ";

    // var interpolada_ou_concatenada = $"LEGADO pular linhas A CADA LINHA NO FIM DAS ASPAS COLOCAVA O + " +
    // "PULEI VAI VIR OUTRO MAIS APOS ASPAS >> " +
    // "PULEI A TERCEIRA E CHEGA !!!";

    // var interpolada_ou_concatenada = $"""
    // inserido 3 aspas duplas e posso pular de linha avontade esta é a linha1
    // ESTA É MINHA VAR INTERPOLADA >> {variavel}
    // linha 2 aqui
    // linha 3 aqui
    // chega !!!
    // """;

    var interpolada_ou_concatenada = $$"""
    escapar template json escapando chaves e interpolacao ao copiar para a string o json :
    solucao usar 2 $$ dolar ants das aspas  e 2  na chaves nal interpolada onde tem json na string
      exemplo de json aqui na string  {"chave": "valor" } ele sozinho nao consegue escapar as chaves ...este foi um json ou objetoLiteral esta é uma var agora cque tem json {{varNovaOndeTemJson}}
    """;

    return interpolada_ou_concatenada;
  }
}