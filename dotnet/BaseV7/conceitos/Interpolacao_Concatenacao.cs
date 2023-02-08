
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

    var interpolada_ou_concatenada = $"""
    inserido 3 aspas duplas e posso pular de linha avontade esta é a linha1
    ESTA É MINHA VAR INTERPOLADA >> {variavel}
    linha 2 aqui
    linha 3 aqui
    chega !!!
    """;

    return interpolada_ou_concatenada;
  }
}