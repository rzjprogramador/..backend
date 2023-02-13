
# METODOS EXCLUSIVOS PARA ESPIONADOS
[doc vi.fn](https://vitest.dev/api/#vi-fn)
---

seja_chamado_exatamente_com_este_valor: toHaveBeenLastCalledWith('valor') // traducao: "ter sido chamado pela última vez com".

---

seu_retorno_seja: toHaveReturnedWith( <retorno esperado> ) // ex: toHaveReturnedWith(20) to afirmando que o retorno do espionado será 20

---

se_o_valor_recebido_via_args_foi _este: toHaveBeenCalledWith('valor via args') // conceito: se foi chamado exatamente com o valor passado ..
obs: o metodo tem que estar sendo espionado e ser usado com o valor que foi aadvinhado.
// traducao: to Have Been Called With == ter sido chamado com

---
que_ja_foi_chamado: toHaveBeenCalled()
traducao: ter sido chamado

---

marretadamente_ou_apos_uso_Retornou_com_o_valor: .toHaveReturnedWith( valor )
traducao: deve retornar com

---

mockar_simular_valor_de_retorno_apenas_uma_vez: mockReturnValueOnce ( valor )
conceito: mockar simular outro valor de reorno da funcao , mantendo o mesmo tipo
traducao: valor de retorno simulado uma vez
ex:
  myFunc.mockReturnValueOnce('50') // mockei que vai retornar '50'
  const input = myFunc()
  expect(input).toBe('50')// Metodo que funciona é o igual ..para o valor de retorno mocado da funcao

---

