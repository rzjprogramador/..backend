interface AvisosModel {
  aviso_no_console: AvisoNoConsole;
  avisos_mouse_na_variavel: AvisoMouseNaVariavel;
}

type AvisoNoConsole = {
  aviso_local_e_qual_o_erro: string;
};
type AvisoMouseNaVariavel = {
  conceito: string;
  quando_falta_uma_propriedade_no_objeto: string;
};

export class Avisos {
  constructor(private readonly p: AvisosModel) {}
}
