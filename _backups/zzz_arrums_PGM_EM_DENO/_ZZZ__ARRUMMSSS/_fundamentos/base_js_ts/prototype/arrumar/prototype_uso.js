{
  o_que_o_prototype_armazena: `O Proto armazena os metodos que o objeto pode acessar.`,

  cada_tipo__de_objetos_que_tem_seu_proprio_prototipo: [
    'Array', 'Objeto Literal', 'Funcao', 
  ],

  instancia_proto: `cada objeto de tipo vai herdar a instancia do seu tipo e apontar para a mesma heranca armazenada apra aquele tipo dentro de __proto__`,

  como_ver_o_prototipo: `
  console.log(estrutura ex: [] ou {}) e seu prototipo metodos e props que herdam automaticamente cada tipo
  exemplo: 
  // CRIANDO E VERIFICANDO NO CONSOLE UM ARRAY E UM OBJETO:
  console.log([])
  console.log({})

  /* ---------------------- // ---------------------- */
/* ACESSANDO O PROTOTIPO COM A PROPRIEDADE .prototype  ou __proto__*/

// EXEMPLO VERIFICANDO SE CADA OBJETO ESTA APONTANDO APRA O MESMO PROTOTIPO:

const arr1 = []
const arr2 = []

console.log(arr1.prototype === arr2.prototype) // true --apontam para o emsmo prototipo
// ou
console.log(arr1.__proto__ === arr2.__proto__) // true --apontam para o emsmo prototipo

/* ---------------------- // ---------------------- */


  `

  usando_metodo_do_tipo: `
  exemplo:
  console.log( [].includes())
  `
}

{
  entendendo: `
  se vc criar uma estrutura de objeto exemplo array vazio e ve rno console: vai mostrar a funcao constrrutora
  Array(0)
  `,

  investigar_no_console_os_metodos_no_proto: `
  - coloque o nome da funcaoConstrutora a investigar .prototype
  - estara no construtor do investigado os metodos que ele tem disponivel no seu prototipo.
  exemplo:
  criaObjeto.prototype

  - la no __proto__: O TIPO QUE ELE VAI CRIAR ex: __proto__: Object // vai criar um objeto

  `,

  moral_da_historia: `Em 2022 se a sua funcao nao estiver nas props do objeto ok....e ja estiver onde deve estar no construtor do prototipo ..o javascript ja esta fazendo isto automaticamente quando vc nao cria  a funcao dentro da funcao construtora..entao só use funcoes auxiliares como service como referencia invocando dentro da sua construtora e nao a criando dentro da sua funcao construtora...NUNCA CRIE UMA FUNCAO DENTRO DA OUTRA `,

  criando_prototipo_manualmente: `/*
  // CRIANDO O PROTOTIPO MANUALMENTE PARA UMA FUNCAO QUE VAI SER INSERIDA NO PROTOTIPO
  // TODA FUNCAO CRIADA COMO É UM OBJ TEM ACESSO AO .prototype <VC CHAMA O EMTODO QUE QUER CRIAR INVENTAR UM NOME E ATRIBUI A ELE A FUNCAO QUE DESEJA QUE ELE TENHA ex:>

  // AQUI PARA O PROTOTIPO DA FUNCAO Pessoa estou criando a funcao login que tera uma funcao.
  
  Pessoa.prototype.login = function () {
    return `${this.nome} fez login !!!`;
  };
  
  */
 `,
}