interface Props_Utilitario_Membro_Prototipo {
  metodo_de_uso: string;
  converter_para_numeroInteiro: string;
  converter_para_texto: string;
  converter_para_boleano: string;
  descobrir_tipo: string;
}

export class Utilitario_Membro_Prototipo {
  constructor(private readonly p: Props_Utilitario_Membro_Prototipo) {}
}
