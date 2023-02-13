{
  definir_propriedades_da_classe: `
  PROPRIEDADES DA CLASSE -- QUE OS FILHOS PODERAM TER EM CAMPOS.
  RACK: FAÇO NO CONSTRUTOR A PROPRIEDADE PRIVADA SÓ PARA LEITURA :: ASSIM TEREI UMA PROPRIEDADE DA CLASSE - QUE TODOS OS FILHOS PODERAM TER.
  exemplo: 
  constructor(private readonly props: T) {}
  
  // -----------------------------------------

  AO INVES DO JEITO VERBOSO:
  PROPS DA CLASSE AO INVES DE DECALRAR PROPRIEDADES CAMPOS NO TOPO SENDO DA CLASSE E DEPOIS ATRIBUIR O THIS.PROPRIEDADES A PROP AA CLASSE NO BLOCO CONFIGURADOR DO CONSTRUTOR
    ex:
    public props: T // TO TOPO DA CLASSE
    { this.props = props } // NO BLOCO QUE CONSTROI

   `,

   definir_propriedades_da classe_via_funcao_do_construtor: {
     construtor_uso_cliente: {
       conceito: `Onde chamar o "new" estará fazendo a invocacao da funcao  construtor() da classe e passara em argumentos os aprametros que nele foi integrado.`
     }
   }
}