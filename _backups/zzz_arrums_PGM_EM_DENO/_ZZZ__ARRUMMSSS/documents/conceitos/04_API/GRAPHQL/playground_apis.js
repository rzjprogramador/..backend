api_acesso_playground: [
  {
    nome: "bob",
    local: 'localhost',
    link: "http://localhost:7777/graphql",
    tutorial: "https://www.youtube.com/watch?v=9baFFA_Wf78",
    detalhes: ``,
  },
  {
    nome: "spacex",
    local: 'web'
    link: "https://api.spacex.land/graphql/",
    tutorial: "https://www.youtube.com/watch?v=9baFFA_Wf78",
    detalhes: ``,
  },
  {
    nome: "insominia",
    local: 'pc'
    link: "http://localhost:7777/graphql",
    tutorial: "https://www.youtube.com/watch?v=9baFFA_Wf78",
    detalhes: `
    Configurar insomina para graphql:
    1- nova variavel ambiente : new enviroment configurar json com variavel d eacesso e local do endpoint:
    {
      "base_graphql": "http://localhost:7777/graphql"
    }

    2- no painel em Body >> escolher GraphQL Query e faça sua consulta igual no playground
    `,
  },
];

/**
 * doc: oficial graphql : https://graphql.org/
 *
 * OBS: ERROS COM PLAYGROUND :: GET query missing :: DE NAO ENCONTRAR CONSULTA
 * solucao: DESLIGUE E LIGUE NOVAMENTE O PC
 */
