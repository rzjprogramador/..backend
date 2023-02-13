// MODELO
// {
//   tecnologia: `test`,
//   contexto: ``,
//   framework: `vitest`,
//   fluxo: ``,
//   metodo: ``,
//   significado: ``,
//   sintaxe: ``,
//   metodo_recebe: ``,
//   exemplo: `

//   `,
// },
//

{
  tecnologia: `test`,
  contexto: `variaveis globais para todos os testes`,
  framework: `vitest`,
  fluxo: `
  - declara no escopo global do test as variaveis sem valor em "let" .
  - no metodo beforeEach :: define so valores das variaveis declaradas fora.
  - em cada test podemos usar estas variaveis do escopo global porque seus valores foram definidos dentro do beforeEach() 
  `,
  metodo: `beforeEach()`,
  significado: `antes de tudo para cada test ()`,
  sintaxe: `() => {} `,
  metodo_recebe: `recebe uma funcao que entao: da valor as variaveis declaradas no escopo global do test`,
  exemplo: `
  // GLOBAIS::
  let userDataRequest: UserRequest
  let sut: IUser

  beforeEach(() => {
    // VALOR DAS VAR GLOBAIS::
    userDataRequest = {
      nome: 'any_nome',
      email: 'any_email',
      password: 'any_password',
    }

    // METODO A SER TESTADO --> SERÁ O SUT ::
    sut = createUser(userDataRequest)

  `,
},
//