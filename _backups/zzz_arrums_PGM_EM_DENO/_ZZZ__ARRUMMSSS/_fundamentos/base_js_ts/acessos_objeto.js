// ACESSO A PROPS DO OBJETO : DENTRO DOS METODOS DESTE OBJETO
// ACESSE COM O this. QUE QUER DIZER O PROPRIO OBJ

const RepositoryInternal = {
    items: ['oi'],
  
    add(item) { this.items.push(item) },
  
    show() { return this.items },
  
}

RepositoryInternal.add('1')
console.log(RepositoryInternal.show())