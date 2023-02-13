import { Avisos } from "./../../Avisos.ts";

const avisos_Dotnet = new Avisos({
  aviso_no_console: {
    aviso_local_e_qual_o_erro:
      "vem o endereco do arquivo, e a mensagem 'esperando' e antes desta mensagem esperando o que ele espera que é o nao tinha e deu erro .. e a linha onde deu o erro.",
  },

  avisos_mouse_na_variavel: {
    conceito:
      "ao passar o mouse na variavel mostra :: Tipoelemento que falta 'o nome do elemento' mensagem : is missing in type 'esta faltando neste tipo' .... ex: Property 'exemplos' is missing in type",

    quando_falta_uma_propriedade_no_objeto:
      "Property 'exemplos' is missing in type : traducao: a Propriedade exemplos esta faltando neste tipo",
  },
});
console.log(avisos_Dotnet);
