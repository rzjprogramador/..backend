/* ---------------------- // ---------------------- */
/* MODELO*/
{
  nome: 'eval',
  funcionalidade: '',
  parametros_que_espera: [],
  detalhes: ``,
  exemplo: `
  // ...
  `,
}
//

/* ---------------------- // ---------------------- */
/* FUNCOES JAVASCRIPT */
{
  nome: 'eval()',
  funcionalidade: 'auto_executador',
  parametros_que_espera: ['dentro de uma string espera :: uma funcao do javascript e o que ela vai executar '],
  
  detalhes: `EVAL() NAO EXECUTA FUNCOES VINDAS DE AROW FUCNTIONS ES6 POR SER MAIS ANTIGO`,
  
  exemplo: `
   // ...Vai executar um console.log de alguam mensagem
    eval( 'console.log("mensagem foo")' )
  `,
  
}

// 


// eval() vc passa uma funcao dentro de string pra ele ele executa imediatamente.