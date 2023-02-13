import { Auxiliar } from "../../../Use/Auxiliar.ts";
import { Significados } from "../../../Use/Significados.ts";
import { makeTests_Principais } from "../../Tests_Principais.ts";

const Deno_Tests_Principais = makeTests_Principais({
  conceitos: {
    funcaoUnica_TresArgumentos: Significados.funcaoUnicaParaTestTresArgumentos,
    funcoesDesencadeadas: Significados.funcoesDeTestDesencadeadas,
  },

  //
  igualdade: {
    valor_e_igual: {
      lib: "assert",
      sintaxe_verificacao: "verificando_com_FuncaoUnica",
      metodo: "assertEquals()",
      significado: "é igual",
      como_implementar_manualmente:
        "if (verificado === minhaResposta) { faça }",
      exemplo: `
        assertEquals ( verificado, minhaResposta, mensagemparaErro)
        assertEquals( meuValor, "Programador Reinaldo Zacharias", "Ops.. MENSAGEM DE ERRO!",);      
        `,
    },

    se_sao_iguais_os_primitivos: {
      lib: "expect",
      sintaxe_verificacao: "verificando_com_FuncoesDesencadeadas",
      metodo: ".toBe",
      significado: "verificando_com_FuncoesDesencadeadas",
      como_implementar_manualmente: "",
      exemplo: `
          expect ( verificado ) .toBe ( minhaResposta )
          `,
    },

    se_sao_iguais_os_nao_primitivos: {
      lib: "expect",
      sintaxe_verificacao: "verificando_com_FuncoesDesencadeadas",
      metodo: ".toEqual",
      significado: "estes do tipo objeto sao iguais",
      como_implementar_manualmente: Auxiliar.TODO,
      exemplo: `
          expect(meuArray2).toEqual(["um", "dois", "tres"]);
          `,
    },
  }, // igualdade

  textos: {
    se_o_texto_contem_pedaco_ocorrencia: {
      lib: "assert",
      sintaxe_verificacao: "verificando_com_FuncaoUnica",
      metodo: "assertStringIncludes",
      significado: "afirmmo que a string tem incluso",
      como_implementar_manualmente: Auxiliar.TODO,
      exemplo: `
      assertStringIncludes ( verificado, minhaResposta, mensagemparaErro)
      assertStringIncludes(meuValor, "Pro", "Ops.. MENSAGEM DE ERRO!");
      `,
    },

    se_o_texto_contem_uma_ocorrencia: {
      lib: "assert Contains",
      sintaxe_verificacao: "verificando_com_FuncaoUnica",
      metodo: "assertStringContains",
      significado: "afirmo que na string contem pelo menos uma",
      como_implementar_manualmente: "",
      exemplo: `
    assertStringContains ( verificado, minhaResposta, mensagemparaErro);
    assertStringContains(meuValor, "Reinaldo", "Ops.. MENSAGEM DE ERRO!");
    `,
    },
  }, // textos

  arrays: {
    verificar_tudo_que_tem_no_array: {
      lib: "assert",
      sintaxe_verificacao: "verificando_com_FuncaoUnica",
      metodo: "assertArrayIncludes",
      significado: "afirmo que no array tem incluso",
      como_implementar_manualmente: Auxiliar.TODO,
      exemplo: `
    assertArrayIncludes ( verificado, minhaResposta, mensagemparaErro)
    assertArrayIncludes(meuArray,["um", "tres", "Nove"],"Ops.. MENSAGEM DE ERRO!", );
    `,
    },

    se_o_array_contem_uma_ocorrencia: {
      lib: "assert Contains",
      sintaxe_verificacao: "verificando_com_FuncaoUnica",
      metodo: "assertArrayContains",
      significado: "afirmo que no array contem pelo menos uma",
      como_implementar_manualmente: Auxiliar.TODO,
      exemplo: `
    assertArrayContains ( verificado, minhaResposta, mensagemparaErro);
    assertArrayContains(meuArray, ["um"], "Ops.. MENSAGEM DE ERRO!");
    `,
    },

    afirmar_tamanho_do_array: {
      lib: "expect",
      sintaxe_verificacao: "verificando_com_FuncoesDesencadeadas",
      metodo: ".toHaveLength ()",
      significado: "have = tem , tem o tamanho...",
      como_implementar_manualmente: Auxiliar.TODO,
      exemplo: `
    expect(meuArray2).toHaveLength(3);
    `,
    },
  }, // arrays

  promisses: {
    afirmar_resolucao_da_promisse: {
      lib: "expect",
      sintaxe_verificacao: "verificando_com_FuncoesDesencadeadas",
      metodo: "expect( Promise.resolve(minhaPromessa())).resolves",
      significado: "have = tem , tem o tamanho...",
      como_implementar_manualmente: Auxiliar.TODO,
      exemplo: `
      expect(Promise.resolve(minhaPromessa())).resolves.toEqual(
    "promessa chegou",
  );
  
  // verificar uma promise, e quando ele resolver Ver se é igual ao que eu passar. obs: a suite nao precisa ser async e nem a chamada da minha promise para verificar ter o await antes na suite de test.
      `,
    },
  }, // promisses
});

console.log(Deno_Tests_Principais);
