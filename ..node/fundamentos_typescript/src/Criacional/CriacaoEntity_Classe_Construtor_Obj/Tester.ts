import User01, { ArgsUser01 } from '.'

const reinaldo = { primeiroNome: 'Reinaldo2', complementoNome: 'sobrenomeReinaldo' }
const renata = { primeiroNome: 'Renata2', complementoNome: 'sobrenomeRenata' }

const makeUser01 = (arg: ArgsUser01) => {
  const instance = new User01(arg)
  return instance
}

const instance1 = makeUser01(reinaldo)
const instance2 = makeUser01(renata)

instance1.getNomeCompleto().then(fooData => console.log(fooData))
instance2.getNomeCompleto().then(fooData => console.log(fooData))
