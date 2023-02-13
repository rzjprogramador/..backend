// deno-lint-ignore-file no-unused-vars ban-unused-ignore

import { makeTests } from "../../Tests.ts";

const Tests_Deno = makeTests({
  ajuda_cli_com_tests: "deno test --help",

  padrao_arquivo_para_tests: "arquivos com a extensao .test  || _test",

  comando_rodar_test: `
  deno test // roda todos tests. 
  deno test <url roda o test isolado> 
  // se pedir permissao deno test -A <url>  :: -A para liberar
  `,

  montar_suite_de_test:
    "chama a classeStatica Deno. abre o metodo test, passa os 2 params dele: <string com nome do test>, <funcao anonima para fazer a logica do test>",

  sintaxe_suite_test: 'Deno.test( "NomeDoTest", () => { ..logicaTest... })',

  testando_sem_lib:
    "nao precisa importar nenhuma lib,monta a suite de test, e nela faz condicionais codigos para verificacoes, e como saida para erros gerar um novo erro da linguagem para erros e excessoes ex: throw new Error(`Mensagem`) ",

  links_api_testing: [
    "basicos: https://deno.land/manual@v1.30.1/basics/testing",
    "assert: https://deno.land/manual@v1.30.1/basics/testing/assertions",
    "expect semelhante jest, vitest :https://deno.land/x/expect@v0.2.10",
  ],

  rodar_primeiro_test_para_carregar_lib:
    "importar o modulo assert , rodar o primeiro test simples com ele depois apaga-lo das chaves da importacao e vai msotrar os outros modulos da lib disponiveis. ex: { assertEquals, assertArrayIncludes, assertStringIncludes } .. obs: senao souber o link da importacao coloque a funcao e importe automaticamente e rode o priemiro etstq eu a lib carrega",

  usando_FuncoesProntas_DaAPI:
    "invocaAfuncaoAssert( params : <1º variavelASerVerificada>, <2º SuaAfirmacaoDeResposta>, <3º mensagem feedback para caso der erro no test>",

  exemplo_FuncoesProntas_DaAPI:
    'assertEquals(varMeuValor, "O valor é Programador");',
});
console.log(Tests_Deno);
