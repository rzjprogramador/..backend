// deno-lint-ignore-file

interface PropsTests {
  ajuda_cli_com_tests: string;
  padrao_arquivo_para_tests: string;
  comando_rodar_test: string;
  montar_suite_de_test: string;
  sintaxe_suite_test: string;
  testando_sem_lib: string;
  links_api_testing: string[];
  rodar_primeiro_test_para_carregar_lib: string;
  usando_FuncoesProntas_DaAPI: string;
  exemplo_FuncoesProntas_DaAPI: string;
}

class Tests {
  constructor(private readonly p: PropsTests) {}
}

export const makeTests = (p: PropsTests) => new Tests(p);
