interface Props_Comando_Entrada_Saida {
  localDeUso: string;
  comando: string;
  exemplo: string;
}

export class Comando_Entrada_Saida {
  constructor(private readonly p: Props_Comando_Entrada_Saida) {}
}
