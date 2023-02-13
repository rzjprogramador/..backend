eslint_prettier: {
  instalacoes: [
    'yarn add -D eslint'
    'yarn eslint --init' 
    'perguntas: ',

    'Se seguir as perguntas eslint vai instalar por la ao confirmar:',
    `@typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest`

    `apos instalacoes vai criar eslintrc.json se nao tiver`
  ],

  configuracoes_eslintrc: {
    conexao_com_prettier: `
  no arquivo eslintrc : em extends adicionar :
  "plugin:prettier/recommended"
  `,

  instalar_prettier: `
  doc: https://github.com/prettier/eslint-config-prettier#installation
  
  yarn add -D prettier eslint-config-prettier eslint-plugin-prettier

  em extends do eslintrc adicionar :
  "some-other-config-you-use",
    "prettier"

    doc: plugin prettier :
    https://github.com/prettier/eslint-plugin-prettier#recommended-configuration

    // adicionar o plugin prettier
    em plugins adicionar :: "prettier"

    em rules adicionar: para dar erro se achar problemas linters
    "prettier/prettier": "error"
  
  `,
  no_blooc_env: `adicionar para reconhecer as variaveis de :
  "node": true,
  "vitest": true,
  "jest": true
    `
  }

  


  // ==================

  perguntas: [
    'Para Selecionar ou Desmarcar: mude com as setas e aperte "ESPAÇO" para selecionar',

    'escolher se da aviso checagem de erro ou arruma o codigo forcadamente escolher só checar sintaxe : To check syntax and find problems',

    'Como gostaria de usar a importacao de modulos, escolher :
    JavaScript modules (import/export)',

    'Se esta usando algum framework frontend
    :: para projetos api escolher: 
    None of these == Nenhum destes',

    `Does your project use TypeScript = Seu projeto usa Typescript , confirmar`,

    `Onde seu codigo é executado = Where does your code run
    Se for projeto backend api no node escolher: Node`,

    `
    What format do you want your config file to be in?
    Em qual formato você deseja que seu arquivo de configuração esteja?
    
    escolher: JSON
    `,

    `
    Would you like to install them now?
    Deseja instalá-los agora?
    @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest

    confirmar yes
    `,

    `Which package manager do you want to use?
    Qual gerenciador de pacotes você deseja usar?
    
    escolher: yarn`
  ]

autoSave_settings_json: `
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true,
"source.fixAll": true
},
`,

no_settings_do_vscode: `
definir o prettier como editor apdrao do vscode:
"editor.defaultFormatter": "esbenp.prettier-vscode", // EDITOR PADRAO VSCODE
`,

para_funcionar: `Para funcionar feche e abra o vscode.`


}

