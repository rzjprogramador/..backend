// deno-lint-ignore-file no-unused-vars ban-unused-ignore

import { Contratos_Interfaces_Abstratos } from "../../Contratos_Interfaces_Abstratos.ts";

const Contratos_Interfaces_Abstratos_Typescript =
  new Contratos_Interfaces_Abstratos({
    uso_contrato_campo_objeto: `
  em typescript :: uso_contrato_campo_objeto :: 
   - na interface passar o valor do campo como Object 
   - na classeImplementadora em seu bloco construtor , fazer a propriedade deste campo ser a classe deste Object prometido ex: this.p.campo = Classe.propriedade
   - onde for usar argumentar pode argumentar com o tipo prometido.
  `,
  });
console.log(Contratos_Interfaces_Abstratos_Typescript);
