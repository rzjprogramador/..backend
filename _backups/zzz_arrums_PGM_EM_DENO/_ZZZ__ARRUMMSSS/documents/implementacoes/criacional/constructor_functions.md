# CRIACIONAL BY CONSTRUCTOR FUNCITI

### CRIACAO OBJETOENTIDADE VIA CONSTRUCTOR FUNCTION
> status_uso:
- constructor function é legado ...para criacao de objeto entidade pode usar classe em js e ts.

> objetivo: 
- criar as propriedades e metodos que vai querer que todos os objetos filhos da entidade tenham em seu dna prototype.

> NA FUNCAO CONSTRUTORA:
- Tem que ser uma nomeada function ex: function Nome... convencao de nomeacao = SnakeCase
- nos params o 1º param é o this para referenciar o objeto, tipar o this com o contrato do Arg que vai receber., 2º param o arg que vai receber para formar o objeto.
- dentro diga com o this.a chave que vai ter = o que vier da chave recebida do Client via param
- nao precisa de return ..porque no uso instanciacao terao que usar o new.

> operador new :
- No uso da ConstructorFunction o new cria um objeto vazio e atribui as chaves vindas pelo this ao novo objeto.

> uso instanciacao com Typescript
sintaxe: new (EntidadeConstructorFunctionCriada as any) (argumento)
ex: new (PromocaoEntregaEntity as any) (promocao)

---

# CRIAR E INSERIR METODO NO PROTOTYPE DO OBJETO CRIADO

sintaxe: 
EntidadeCriada.prototype.metodoNovo = async (argPromocao: ArgsPerformPromocao) => {
    return await performPercentage(argPromocao)
}


exemplo:
```
PromocaoEntregaEntity.prototype.usePerformPromocaoEntrega = async (argPromocao: ArgsPerformPromocao) => {
    return await performPercentage(argPromocao)
}
```