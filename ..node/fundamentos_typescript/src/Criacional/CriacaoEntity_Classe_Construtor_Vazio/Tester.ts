import User02, { ArgsUser02 } from './'

const reinaldo = { primeiroNome: 'Reinaldo2', complementoNome: 'Junior 2 ' }
const renata = { primeiroNome: 'Renata', complementoNome: 'Pereira 1 ' }

const makeUser02 = (arg: ArgsUser02) => {
  const instance = User02.create(arg)
  return instance
}

const instance1 = makeUser02(reinaldo)
const instance2 = makeUser02(renata)

 instance1.then(data => console.log(data)) 
 instance2.then(data => console.log(data))

// TODO: FUNCIONAR PROTO
// instance1.
// instance1.getNomeCompleto().then(fooData => console.log(fooData))
// instance2.getNomeCompleto().then(fooData => console.log(fooData))
