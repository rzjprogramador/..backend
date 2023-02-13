// deno-lint-ignore-file no-empty-interface ban-unused-ignore ban-types
import { Auxiliar } from "../Use/Auxiliar.ts";

interface Props_Funcoes_Loop_De_Array {
  nome: string;
  significado: string;
  forma_de_chamada: Object;
  sintaxe: string;
  aplicabilidade: string;
  exemplo: string;
}

export class Funcoes_Loop_De_Array {
  constructor(private readonly p: Props_Funcoes_Loop_De_Array) {
    this.p.forma_de_chamada = Auxiliar.FORMA_DE_CHAMADA;
  }
}
