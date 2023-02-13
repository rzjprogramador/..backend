
interface Props_Variavel_Que_Armazena_Diversos_Dados {
  nome: string;
  significado: string;
  aplicabilidade: string;
  declaracao: string;
  metodosPrototipos: string;
  crud_adicionar: string;
  crud_acessar_individual: string;
  crud_acessar_todos: string;
  crud_atualizar: string;
  crud_deletar: string;
  acesso_item_individual: string;
  acesso_via_metodo: string;
  exemplo: string;
}

export class Variavel_Que_Armazena_Diversos_Dados {
  constructor (private readonly p: Props_Variavel_Que_Armazena_Diversos_Dados) {}
}