// deno-lint-ignore-file

interface PropsTests_Principais {
  conceitos: Conceitos;
  igualdade: Igualdades;
  textos: Textos;
  arrays: Arrays;
  promisses: Promisses;
}

interface Conceitos {
  funcaoUnica_TresArgumentos: string;
  funcoesDesencadeadas: string;
}
interface Verificacao {
  lib: string;
  sintaxe_verificacao:
    | "verificando_com_FuncaoUnica"
    | "verificando_com_FuncoesDesencadeadas";
  metodo: string;
  significado: string;
  como_implementar_manualmente: string;
  exemplo: string;
}

interface Igualdades {
  valor_e_igual: Verificacao;
  se_sao_iguais_os_primitivos: Verificacao;
  se_sao_iguais_os_nao_primitivos: Verificacao;
}
interface Textos {
  se_o_texto_contem_pedaco_ocorrencia: Verificacao;
  se_o_texto_contem_uma_ocorrencia: Verificacao;
}

interface Arrays {
  verificar_tudo_que_tem_no_array: Verificacao;
  se_o_array_contem_uma_ocorrencia: Verificacao;
  afirmar_tamanho_do_array: Verificacao;
}

interface Promisses {
  afirmar_resolucao_da_promisse: Verificacao;
}

class Tests_Principais {
  constructor(private readonly p: PropsTests_Principais) {}
}

export const makeTests_Principais = (p: PropsTests_Principais) =>
  new Tests_Principais(p);
