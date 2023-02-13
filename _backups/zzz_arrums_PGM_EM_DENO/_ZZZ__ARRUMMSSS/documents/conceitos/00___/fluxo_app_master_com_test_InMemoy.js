/*

// 

*/

[
  {
    indeRef: 1,
    tecnologia: `Typescript`,
    implementacao: `Funcional & POO`,
    escopo: "core da app ts",
    local: `entity/`,
    objetivo: "criar objeto da entidade",
    processos: "funcao criadora da entidade",
    observacoes: "",
  },
  {
    indeRef: 2,
    local: `repository/`,
    acao: "formato do repository",
    alvo: "",
    tipo: `contrato/Repositorio`,
    comunicacao: "",
    processos:
      "interface do repositorio com metodo que vai ter e o ,alvo: '',tipo de dado que vai receber",
    observacoes: "",
  },
  {
    indeRef: 3,
    local: `repository/`,
    acao: "DTO/Data/Request para metodo do formato repositorio",
    alvo: "",
    tipo: `contrato/DTO`,
    comunicacao: "",
    processos: "tipagem dos dados para receber no metodo",
    observacoes: "",
  },
  {
    indeRef: 4,
    local: `repository/prisma`,
    acao: "implementacao contrato",
    alvo: "Repositorio",
    tipo: `classe`,
    comunicacao: `se comunica com o prisma para persistir no banco`,
    processos: `cria um novo objeto da entidade :: recebe os dados ..acessa a tabelaAlvo.metodoObjetivo( { repassa os dados que recebeu })`,
    observacoes: ``,
  },
  {
    indeRef: 5,
    local: "usecase/",
    acao: "regras de negocio e acaoObjetivo",
    alvo: "servico",
    tipo: "classe de servico",
    comunicacao: "integro via contrutor um contrato de repositorio",
    processos:
      "faco o contrato de que dados poderam ser criados DTO/Request - uso este contrato nos dados desempacotados do metodo execute() -- uso como meu atributo o integrado repositorio e apra o seu metodoObjetivo dou os dados que receberei desempacotados",
    observacoes:
      "obs: antes de concretizar o objetivo posso fazer regras de negocio.",
  },

  {
    indeRef: 6,
    local: "na raiz do projeto em tests/modulo",
    acao: "test inmemory que implementa o contrato do objetivoRepository",
    alvo: "repositorio inmemory para injetar no servico",
    tipo: "classe repository inmemory",
    comunicacao: "",
    processos: `
    - criar uma classe repositorio do objetivo inmemory com atributo que simula uma tabela do banco do tipo de array da entidade que começa vazio [],
    - dentro do metodo chamar este atributo array pushar pra dentro dele os dados recebidos
    - vai assim criar um objeto da entidade inmemory

    `,
    observacoes: "",
  },

  {
    indeRef: 7,
    local: "/na pasta do servico / objetivo caso de uso servico.spec",
    acao: "test unitario inmemory",
    alvo: "test do Servico",
    tipo: "test unitario inmemory  do servico",
    comunicacao: "com o a instancia injetada do repositorio InMemory",
    processos: `
    injecao de dependencia :
    criar obj do repositorio inmemory :: instancio o repositorio inmemory
    criar um objetoDaEntidade :: pra isto instancio o new ServicoDeCriacao
    injeto o repositorio no servico e terei o objeto da entidadeRepositoryInMemory

    - entidadeRepositoryInMemory será meu controlle e com ele poderei fazer os tests :   

    - e inicio as assercoes dos tests : 
    
    `,
    observacoes: "",
  },
];
