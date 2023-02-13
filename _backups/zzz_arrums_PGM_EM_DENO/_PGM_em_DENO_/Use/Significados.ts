// deno-lint-ignore-file no-unused-vars no-inferrable-types

export class Significados {
  private static classe: string[];
  private static statico: string;
  private static variavelNormal: string;
  private static variavelArray: string;
  private static variavel_Parametro_Iterador: string;
  public static funcaoUnicaParaTestTresArgumentos: string =
    "funcao unica com 3 espera argumentos funcaoVerificadora( verificado, minhaResposta, mensagemCasoErro)";
  public static funcoesDeTestDesencadeadas: string =
    "funcao esperamos expect( verificado ) .metodoVerificador( minhaResposta )";

  static ArgumentClasse(s: string[]) {
    return Significados.classe = s;
  }

  static ArgumentStatico(s: string) {
    return Significados.statico = s;
  }

  static ArgumentVariavelNormal(s: string) {
    return Significados.variavelNormal = s;
  }

  static ArgumentVariavelArray(s: string) {
    return Significados.variavelArray = s;
  }

  static ArgumentVariavel_Parametro_Iterador(s: string) {
    return Significados.variavel_Parametro_Iterador = s;
  }
}

// // instancias :: argumentando campos

const classe = Significados.ArgumentClasse([
  "Modelo",
  "Familia",
  "Procedencia",
]);
// console.log(classe);

const statico = Significados.ArgumentStatico(
  "statico é um artefato pronto com campos preenchidos por uma unica instancia/ unico utilizador, palavra_chave static ..quando o statico é classe é um objeto pronto, quando é variavel é uma variavel pronta com valor de unico utilizador, quando o statico é funcao é uma unica utilizacao desta funcao nao tera outra igual a esta.",
);
// console.log(statico);

const variavelNormal = Significados.ArgumentVariavelNormal(
  "1 LOCAL NA MEMORIA QUE ARMAZENA APENAS 1 VALOR DENTRO",
);
// console.log(variavelNormal);

const variavelArray = Significados.ArgumentVariavelArray(
  "1 LOCAL NA MEMORIA QUE ARMAZENA MAIS QUE UM VALOR DENTRO",
);
// console.log(variavelArray);

const variavel_Parametro_Iterador = Significados
  .ArgumentVariavel_Parametro_Iterador(
    `
  Parametro Iterador
  significado: a cada rodagem do loop ele assume o valor do item na posicao e incorporado este item podemos fazer algo com o item no momento que ele o incorporou
  
  tem_efeito_colateral: sim tem efeito colateral se fizermos alguma alteracao no item no momento da incorporacao/iteracao vai mudar diretamente onde este item esta armazenado.
  `,
  );
// console.log(variavel_Parametro_Iterador);
