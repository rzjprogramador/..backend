/*

{ 
  indeRef: 0, 
  local: '',
  acao: '',
  alvo: '',
  tipo: '',
  comunicacao: '',
  processos: ``,
  observacoes: '',
},

*/

[
  {
    indeRef: 1,
    local: "modules/entidade",
    acao: "criar modulo graphql ex: modulo.gql",
    alvo: "modulo.gql",
    tipo: "",
    comunicacao: "",
    processos: `
    1- type Query {} // consultas que o client pode fazer ex: getEntidade buscarEntidade por identificador unico e deve retornar a entidade.

    2- type Entidade {} // formato de campos obrigatorios e opcionais que vai ter a entidade
    3- input Entidade {} // empacotamento de campos obrigatorios para se criar uma entidade

    
    `,
    observacoes: "",
  },

  {
    indeRef: 2,
    local: "/modulo/entidade",
    acao: "resolvers",
    alvo: "",
    tipo: "entidade.resolvers.ts",
    comunicacao: "",
    processos: `
    1- exportar por default o obj com os objetos de Consulta e Mutacoes com referencia das funcoes resolvedoras que estaram em /methods{ Query: {}, Mutation: {} }
    
    2- nessas referencias serao as funcoes que prometeu ter na consulta que podem fazer Query do typeDefs

    2- 
    
    `,
    observacoes: "",
  },

  {
    indeRef: 3,
    local: "/entidade/resolvers",
    acao: "funcoes resolvedoras que serao a rota do objetivo",
    alvo: "funcoes resolvedoras que prometeu que podem consultar em { Query: { resolvedora, } }",
    tipo: "funcao",
    comunicacao: "injecao de dependencias o controlle que traz a resposta",
    processos: `
    1- criar a funcao resolvedora que prometeu para consulta 

    2- pode usar nos parametros em justa posicao as opcoes: obj, args, 
    obs: senao for usar colocar a cada posicao de params um handerline "(_: any, )" a cada posicao
    ex: se nao for usar o primeiro e segundo ficaria: (_: any, __: any) é 1 handerline"_" a cada posicao nao utilizada

    3- buscar na importacao da injecao de dependencias o controlle que esta retornando a informacao e retornar no metodo a resposta


    `,
    observacoes: "",
  },
];

/*
.resolvers.ts
*/
