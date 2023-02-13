# Erro de Exportacoes
nome_erro: ERR_PACKAGE_PATH_NOT_EXPORTED,
tutorial: https://bobbyhadz.com/blog/node-error-err-package-path-not-exported

conceito: Se alguma vez deletar a node+modules , depois exclua todos arquivos de lock yarn e de yarn install pra reinstalar,

solucao: `
# 👇️ deletar arquivos de bloqueio yarn e  node_module
rm -rf node_modules
rm -f yarn.lock >> rm -f package-lock.json
rm -f yarn-error.log

# 👇️ clean npm cache
yarn cache clean --force

yarn install
yarn audit fix --force
`,