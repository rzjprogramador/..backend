interface Props_Tipo_Dado {
  significado: string;
  conceito: string;
  boleano: string;
  caractere_texto: string;
  texto: string;
  numero_Inteiro: string;
  numero_Decimal: string;
  diferenciacao_numero_positivo_negativo: string;
}

export class Tipo_Dado {
  constructor(private readonly p: Props_Tipo_Dado) {}
}
