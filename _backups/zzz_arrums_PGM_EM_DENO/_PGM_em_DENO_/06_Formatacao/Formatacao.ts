interface Props_Formatacao {
  template_string: TemplateString;
  interpolar: Interpolar;
  concatenar: Concatenar;
  escapes: Escapes;
}

type TemplateString = {
  conceito: string;
  sintaxe: string;
  pular_linhas_dentro_da_string: string;
  exemplos: string;
};
type Interpolar = {
  interpolar_variavel_com_string_Universal: string;
  interpolar_variavel_com_string_Moderno: string;
  exemplos: string;
};
type Concatenar = {
  concatenar_variavel_com_string_Universal: string;
  concatenar_variavel_com_string_Moderno: string;
  exemplos: string;
};
type Escapes = {
  escapar_json_na_string: string;
  escapar_variavel_na_string_que_tem_json: string;
  exemplos: string;
};

export class Formatacao {
  constructor(private readonly p: Props_Formatacao) {}
}
