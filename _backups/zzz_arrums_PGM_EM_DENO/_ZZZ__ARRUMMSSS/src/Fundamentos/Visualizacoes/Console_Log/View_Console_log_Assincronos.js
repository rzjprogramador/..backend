class ConsoleAssincrono {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  async getNomeCompleto() {
    return await `${this.nome} ${this.sobrenome}`
  }
}

const instance1 = new ConsoleAssincrono('FooNome', 'FooSobrenome2')

// VER O METODO ASSINCRONO NO CONSOLE
instance1.getNomeCompleto().then(fooData => console.log(fooData))

/*
VER METODO ASSINCRONO NO CONSOLE.LOG

SINTAXE: instance.metodoAssincrono().then(fooData => console.log(fooData))

conceito: chama a promessaAssincrona , desencadeia um then( que recebe uma funcao anonima com qualquer nome de param que ela ja espera e no seu bloco faz o que vc quer no caso ver no console o dado de parametro que deu certo) 

// exemplo01
metodoAssincrono(instance1).then(instance1 => console.log(instance1))

//exemplo02
instance1.getNomeCompleto().then(fooData => console.log(fooData))
*/