/*
  linguagem: typescript:
  instalacao: se tiver o deno instalado nao precisa instalar o typescript globalmente.
  
  acesso_membros_prototipos_primitivos: com a variavel recebendo um valor, o tipo deste valor da acesso ao prototipo de tipos javascript e podemos assim usar seus membros de leitura e escrita para cada tipo de valorDeDado.


*/

// exemplos: acesso a membros prototipos javascript no typescrit by deno.js

const texto = "meu texto";
console.log(texto.charAt(0));

interface MeuObj {
  campo1: string;
}
const meuObj: MeuObj = { campo1: "valor campo 1" };
console.log(meuObj.campo1.toUpperCase());
