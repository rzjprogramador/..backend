# INSTALACOES

## INSTALAR PACOTE COM VERSAO ESPECIFICA
> npm i <nome-do-package>@1.1.0

## Dev Dependencies ::: 
comando: yarn add -D <<...OU...>> npm install -D <pacote> | OU | --save dev

> iniciar projeto package.json
```npm init -y``` // mesmo instalador yarn pode iniciar com npm init -y

> iniciar reinstalando pacotes
```yarn install```

> typescript
```typescript @types/node```

> run typescript
```ts-node-dev```

> tests
```vitest supertest @types/supertest vite-tsconfig-paths```

> server
```@types/express```

> errors
```express-async-errors```
> inserir na primeira linah do server:
import 'express-async-errors'

> caminhos_mapeados 
```tsconfig-paths```


> build
rimraf para deletar diretorio: ```npm i -D rimraf```

> arquivos
```pdf-parse @types/pdf-parse```

> github :: conventional commit
[git-commit-msg-linter :: lib para validar type de commits no node >> doc:](https://www.npmjs.com/package/git-commit-msg-linter)
```git-commit-msg-linter```

> base de dados:
> inserir no package.json:
"prisma": {
    "seed": "ts-node -r tsconfig-paths/register prisma/seed.ts"
}

---

## Dependencies ::: 
comando: yarn add <pacote>  <<...OU...>> npm install <pacote>

> server
```express```

> caminhos mapeados module-alias
 ```npm install module-alias```
> inserir no package.json: 
"_moduleAliases": {"@src/": "./src/"}
> inserir na primeira linhado server:
import 'module-alias/register'