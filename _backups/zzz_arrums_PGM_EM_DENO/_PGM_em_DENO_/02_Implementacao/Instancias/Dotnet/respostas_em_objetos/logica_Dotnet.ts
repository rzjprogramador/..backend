import { Logica } from "../../../Implementacao.ts";

export const logica_Dotnet: Logica = {
  verificacoes: {
    se_e_igual: {
      modo_universal_legado: "==",

      modo_moderno_linguagem: "is",

      exemplos: `
      // universal :
      if ( propriedade == null )

      // modernoLinguagem:
      if ( propriedade is null )
      
      `,
    },

    se_tem_valor_dentro_se_propriedade_e_diferente_de_nulo: {
      modo_universal_legado: "!= null",

      modo_moderno_linguagem: "is not null",

      exemplos: `
      // universal :
      if ( propriedade != null )

      // modernoLinguagem:
      if ( propriedade is not null )
      
      `,
    },
  },
};
