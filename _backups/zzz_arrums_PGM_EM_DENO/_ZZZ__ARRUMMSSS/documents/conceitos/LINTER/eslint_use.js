{
  script_varredura_eslint: `
  "linter": "eslint",


  // este só funciona se nao tiver padrao standard no eslintrc - se tiver por padrao ele ja reconhece as extensoes:
  "linter": "eslint . --ext .ts,.js,.jsx",
  
  `,
}