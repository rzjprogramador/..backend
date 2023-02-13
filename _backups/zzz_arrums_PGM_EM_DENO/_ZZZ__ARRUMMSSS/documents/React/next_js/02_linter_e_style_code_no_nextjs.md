# CUSTOMIZAR ESTILO DE CODIGO NO NEXT JS

> INSTALAR:
> `yarn add -D eslint-config-prettier prettier`

> ADICIONAR SCRIPT DE VARREDURA PRETTIER :

- "prettier": "prettier --write 'src/\*\*'"
- > AGORA SIM PODE RODAR OS SCRIPTS DE VARREDURA:
  > `yarn lint` > `yarn prettier`

### FUNCIONAR PRETTIER CUSTOMIZADO

adicionar o arquivo .prettierrc.json com as configuracoes desejadas e
no .eslintrc.json no array extends adicionar a chamada ao prettier adicionando : "prettier"
ex:

```
{
  "extends": [
    "next/core-web-vitals",
    "prettier"
  ]
}
```
