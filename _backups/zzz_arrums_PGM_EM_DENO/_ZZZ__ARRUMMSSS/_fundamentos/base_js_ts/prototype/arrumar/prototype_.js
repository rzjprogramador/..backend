{
  prototype: `Prototype é um prototipo um contrato de fabrica para o tipo de objeto que foi criado ..como um carro todos os carros terao que ter o que esta no prototipo.

  Prototipo que cada tipo de tipo de dado herda automaticamente. ex: se esta criando um array herda os metodos de array.

- cada objeto criado ocupa um espaco na memoria.
- nao adicione metodos que ja sao herdados pelo __proto__ em cada objeto criado desnecessariamente.... use os que ele ja herda do proto.

- se na funcao construtora vc criar metodo direto todos objetos que vierem dela terao este metodo..desnecessario criando mais um espaco na memoria....pra resolver isto crie o metodo no proto deste novo objeto ou use classe que ja faz isto por debaixo dos planos.
  
  `,

  ideal_valor_de_propriedades_que_cada_objeto_tem_que_ter: `o ideal cada objeto ter como valor de suas propriedades somente valores do tipo primitivo ex: string, number, boolean e nao ter metodos ex: f () de funcao.`

  valor_de_prop_objeto: `Uma funcao dentro de obj no console mostra a funcao com valor : ƒ () que dizer este obj tem uma funcao e todos iguais a ele tambem tera..isto nao é viavel...cada objeto nao pode ter seus propros metodos em suas propriedades...tem que estar no prototipo para estar disponivel pra todos novos criados.`;

  maquina_do_js: `A Engine do Js procura no __proto__ as propriedades que o objeto pode usar..la deve estar as funcoes que o objeto pode usar ..coloque manualmente via Funcao.prototype.suaFuncao = () {}  ou em 2022 pra frente o js ja faz isto automaticamente confira no console(seuObjeto.prototype se esat em __proto__ sua funcao como propriedade.)`,


  
}
