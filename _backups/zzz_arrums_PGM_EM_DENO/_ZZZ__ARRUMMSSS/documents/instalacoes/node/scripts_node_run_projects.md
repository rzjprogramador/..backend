# SCRIPTS NODEMON COM TS

> mais ou menos:
> "dev:start": "nodemon --watch 'src/\*\*' --exec 'ts-node -r tsconfig-paths/register src/main/server.ts' -e ts,js",

> um pouco mais demorado:
> "dev:start2": "nodemon -e ts,js --exec ts-node -r tsconfig-paths/register src/main/server.ts",

---

# SCRIPT VARREDURA

"linter": "eslint 'src/**' --fix",
"prettier": "prettier --write 'src/**'"
