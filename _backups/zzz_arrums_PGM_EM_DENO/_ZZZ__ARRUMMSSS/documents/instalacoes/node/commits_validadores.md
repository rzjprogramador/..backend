# VALIDADORES DE COMMITS

yarn add -D husky lint-staged

> husky : [definimos hooks/comandos para ser executados antes de commits](https://www.npmjs.com/package/husky)

### APOS O PREPARE RODAR: PARA CRIAR O HUSKY PRE-COMMIT

`npx husky add .husky/pre-commit "yarn lint-staged"`

> lint-staged : definimos hooks/comandos para ser executados dentro na staged area de commits

NO COMMIT VAI RODAR OS CMONADOS DEFINIDOS PARA A EXTENSAO EM QUESTAO CONFGIURADOS NO

ex:
"\*.ts": [
"yarn eslint 'src/**' --fix",
"yarn prettier --check 'src/**'",
"yarn test:staged" // TODO ARRUMAR ESTE DE TEST PARA VALIDAR ARQUIVOS DE TEST VITEST
]
// VAI RODAR ESTES COMANDOS DEFNIDOS PARA TODAS AS EXTENSOES .ts
