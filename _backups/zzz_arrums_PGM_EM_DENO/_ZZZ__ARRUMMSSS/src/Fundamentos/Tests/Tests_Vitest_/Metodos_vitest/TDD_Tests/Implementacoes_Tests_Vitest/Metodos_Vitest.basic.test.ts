import { describe, it, expect, vi } from 'vitest'


describe ('[Compilado Metodos Vitest]', () => {
  it (` checagem em valores primitivos`, () => {
    const sut = 10
    expect(sut).toBe(10) // toBe : è igual..
    expect(sut).toBeGreaterThan(9) // Maior que...
    expect(sut).toBeGreaterThanOrEqual(10) // Maior ou igual que ...
    expect(sut).toBeLessThan(11) // Menor que ...
    expect(sut).toBeLessThanOrEqual(10) // Menor ou igual que ...
    expect(sut).toBeCloseTo(10, 9) // Se o numero esta proximo , a diferenca de casas decimais do 2º argumento ... eo 2º arg seriam casas decimais ate'9 ta dentro do decimal
    expect(sut).toBeCloseTo(9.997) // esta proximo do checado 10
    expect(sut).not.toBeNull() // se o checado "NAO" é nulo ou sem valor

  })

})

describe ('[Compilado Metodos Vitest]', () => {
  it (` checagem em objetos`, () => {
    const sut = { nome: 'reinaldo', idade: 45 }
    const objClone = { ...sut }
    const objEqual = { nome: 'reinaldo', idade: 45 }
    const objDefirente = { nome: 'foo_nome', idade: 120 }
    const objFoo = { foo: 'bar', foo2: 'bar2' }

    expect(sut).toEqual(objClone) 
    // toEqual : Se o Objeto é igual o outro ... faz a avaliaçao pelas propriedades e valores se sao iguais
    expect(sut).toEqual(objClone) 
    expect(sut).toEqual(objEqual) 
    expect(sut).not.toEqual(objFoo) 
    expect(sut).not.toEqual(objDefirente) 
    expect(sut).toHaveProperty('nome')  // Se existe esta chave key
    expect(sut).toHaveProperty('nome', 'reinaldo')  // Se existe esta chave ke tem o valor apssado no 2º arg
    expect(sut).not.toHaveProperty('nome', 'reinaldo2')

  })

})

describe ('Metodos Para Mockados Vitest', () => {

  it (`deve ser usado com este valor o metodo de instancia classe`, () => {
    class ClassMock {
      method (data: string) {
        return data
      }
    }
    const objClasse = new ClassMock()
    const methodSpy = vi.spyOn(objClasse, 'method')
    objClasse.method('foo')
    expect(methodSpy).toHaveBeenCalledWith('foo')
  })

  it (`deve ser usado com este valor o metodo do objeto`, () => {
    const objMethod = {
      method (data: string) {
        return data
      }
    }
    const methodSpy = vi.spyOn(objMethod, 'method')
    objMethod.method('foo')
    expect(methodSpy).toHaveBeenCalledWith('foo')
  })

  it (`[estudo] metodos para funcoes espionadas 1 `, () => {
    const myFunc = vi.fn ((data: string) => data)
    myFunc ('bar')
    expect(myFunc).toHaveBeenCalledWith('bar') // foi chamado com este valor
    expect(myFunc).toHaveBeenCalled() // Ja tenha sido chamado
    expect(myFunc).toHaveReturnedWith('bar') // Retornou com o valor
  })

  it (`[estudo] mockar simular outro valor de reorno da funcao , mantendo o mesmo tipo`, () => {
    const myFunc = vi.fn (() => 'foo')
    myFunc.mockReturnValueOnce('50')
    const input = myFunc()
    expect(input).toBe('50')
  })

  // it (`[estudo] mockar simular outro valor de retorno da funcao , mudando o tipo do retorno`, () => {
  //   const myFunc = vi.fn(() => 'foo').mockImplementationOnce( () => 100 ) // TODO PROMESSA
  //   const input = myFunc()
  //   expect(input).toBe(100)
  // })

})

