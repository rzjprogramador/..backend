// MODELO
{
  tecnologia: ',
  compatibilidade: ''
  contexto: '',
  conceito: '',
  beneficio: ``,
  tipo_instalacao: `devDependencies`,
  comando: ``,
}
//

{
  tecnologia: 'NodeJs',
  compatibilidade: 'Typescript || Javascript'
  contexto: 'comando de instalacoes NodeJs',
  conceito: `instalacao do tipo devDependencies`,
  beneficio: `devDependencies nao precisa instalar no servidor de producao é somente para desenvolvimento na maquina do dev`,
  tipo_instalacao: `devDependencies `,
  comando: `yarn add -D <pacote a instalar>`,
}

{
  tecnologia: 'NodeJs',
  compatibilidade: 'Typescript || Javascript'
  contexto: 'comando de instalacoes NodeJs',
  conceito: `instalacao do tipo devDependencies`,
  beneficio: `dependencies vai ser preciso instalar no servidor de producao no Deploy`,
  tipo_instalacao: `dependencies `,
  comando: `yarn add <pacote a instalar>`,
}