// deno-lint-ignore-file no-unused-vars no-inferrable-types

class Dicas {
  private static precisa_de_objeto_unico: string;
  private static argumentar_campos_classe_statica: string;
  private static fazer_a_variavel_ter_mais_que_um_valor: string;
  public static escapar_caractere_especial: string =
    'insira a barra antes do caractere somente. ex: " ';

  public static classes_e_metodos_staticos: string =
    "Se uma classe é statica seus membros (props e metodos) tem que serem staticos tambem , nao podemos ter membros nao staticos dentro de uma classe statica.";

  static Args_precisa_de_objeto_unico(s: string) {
    return Dicas.precisa_de_objeto_unico = s;
  }

  static Args_campos_classe_statica(s: string) {
    return Dicas.argumentar_campos_classe_statica = s;
  }

  static Args_fazer_a_variavel_ter_mais_que_um_valor(s: string) {
    return Dicas.fazer_a_variavel_ter_mais_que_um_valor = s;
  }
}

// instancias :: argumentando campos

const precisa_de_objeto_unico = Dicas.Args_precisa_de_objeto_unico(
  "Use classe statica...Não crie objeto solto sem classe/familia/procedencia como o js permite é tipo um remendo rs.",
);
// console.log(precisa_de_objeto_unico);

const argumentar_campos_classe_statica = Dicas.Args_campos_classe_statica(
  "para cada campo statico declarado crie um metodo para preencher com argumento esta variavel..obs: #regra :: se o campo é statico o metodo tambem tem que ser.",
);
// console.log(argumentar_campos_classe_statica);

const fazer_a_variavel_ter_mais_que_um_valor = Dicas
  .Args_fazer_a_variavel_ter_mais_que_um_valor(
    "variavel = valor1 || valor2 // usar operador || OU - OR entre os valores desejados.",
  );
// console.log(fazer_a_variavel_ter_mais_que_um_valor);

// USE VISUALIZANDO OS VALORES DESTAS PROPS :
console.log(Dicas.escapar_caractere_especial);
console.log(Dicas.classes_e_metodos_staticos);
