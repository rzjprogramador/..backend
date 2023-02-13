/**
 * enum_variavel_paraselecionar_um_valor_na_para_a_variavel:
 *
quando precisar de uma selecao entre valores que pode ser um ou outro conteudo em um campo >>>  use enum em linguagem que da suporte apra enum assim vc tera uma variavelFonteUnica da verdade onde precisava usar um ou outro valor
 */

// exemplo:

// declarar
enum EnumSelecionavel {
  CONSOLE = "console",
  HTML = "html",
}

// recuperar/usar:
const recuperaEnum = EnumSelecionavel.CONSOLE;
console.log(recuperaEnum);
