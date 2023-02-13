# MOCK 
mock: traducao 'simulado' || 'imitacao' || 'finge ser',

# ESPIAO DE METODOS DE CLASSES E OBJETOS

espiao_de_metodo_em_objeto: {
  metodo: vi.spyOn(),

  tipo: é um mock do vitest,

  conceito: fica espionando metodo em um objeto passado.
    uso: vi.spyOn (objeto, 'funcao a espionar em string')

    metodo_test: toHaveBeenCalledTimes(1) // Ta comparando se foi chamado pelo menos 1 vez

    para_passar: TEM QUE CHAMAR DEPOIS DO SPY PELO MENOS A QUANTIDADE DE VEZES QUE VC TESTOU

    metodos_mock_para_encadear_espionado:
      mockar_valor_de_retorno_uma_vez: mockReturnValueOnce( variavelValor ) // mocakr retornod e valor uma vez
}

---

# CHAMAR O METODO APENAS UMA VEZ
metodo: toHaveBeenCalledTimes , traducao: ter sido chamado vezes ( informe quantas vezes em number)
uso: mock o sut alvo, use o sut quantas vezes vc vai informar que sera usado no metodo que espera na afirmacao.

```
// EXEMPLO:
it(`deve chamar o metodo handle apenas uma vez.`, async () => {
        const input = modalidadeEntregaSeedOne
        const sutMock = await vi.spyOn(sut, 'handle')
        await sut.handle(input)

        expect(sutMock).toHaveBeenCalledTimes(1)
    })
```

---

# MUDAR O VALOR DE RETORNO DE UM METODO APENAS UMA VEZ
metodo_mock: mockReturnValueOnce() , traducao: 'valor de retorno simulado uma vez',
- mudar retorno de um metodo mockado apenas uma vez
- 
tutorial: 'aula mango tdd node 2021 -- aula > 03_03. Utilizando Mocks da maneira correta',

- uso: primeiro sem capturar resultado espiono a classe e metodo alvo :: vi.spyOn(sut, 'handle') 
- mockar o valor do retorno apenas uma vez : mockReturnValueOnce(visitor.create(input)) // quero que retorne outra classe usando seu metodo.
- ai chamo meu sut ja esperando que o metodo fez efeito - que esta usando emu sut com o metodo com valor de reotrno mockado.
- 

```
// exemplo:

it(`deve utilizar o repository in memory sempre no test do service.`, async () => {
        const input = modalidadeEntregaSeedOne
        await vi.spyOn(sut, 'handle').mockReturnValueOnce(visitor.create(input))
        const action = await sut.handle(input)
        // console.log('MOCKADO PARA USAR O REPO MEMORY >> ', action)

        expect(action).toHaveProperty('nome', 'modalidade entrega one')
    })
```
---

