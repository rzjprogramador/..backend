// deno-lint-ignore-file
interface PropsPlataforma {
  nome: string;
  detentora: string;
  idiomaDeLinguagemPrincipal: Linguagem;
  configuracao: ConfiguracaoPlataforma;
}

interface Linguagem {
  nome: string;
  origem: string;
  acesso_membros_prototipos_primitivos_de_sua_origem: string;
}

interface ConfiguracaoPlataforma {}

class Plataforma {
  constructor(private readonly p: PropsPlataforma) {}
}
