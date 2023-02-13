// deno-lint-ignore-file no-empty-interface ban-unused-ignore

interface Props_Declaracao {
  nome: string;
  convencao: string;
  formato_valores: string
  sintaxe: string;
  exemplo: string;
}

export class Declaracao {
  constructor(private readonly p: Props_Declaracao) {}
}
