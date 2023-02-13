# ARRAY TESTS

### EXPECTATIVA DE OBJETO DENTROD E ARRAY
> narracao:
 seja um objeto igual, que espera ter um array que contenha um array que espera ter um objetoque contenha um objeto com chave tal com valor tal

> macete auto_complete: no toEqual, de um expect.array e dentro um expect.object ex:
toEqual() >> axpect.array... ([ expect.objetc...])

passos: aninhados um dentro do outro.:
toEqual()  
expect.arrayContaining()
[]
expect.objectContaining()  
{ chave: 'valor' }

exemplo:

```toEqual( expect.arrayContaining([
expect.objectContaining({
nomeProduct: "any_nome_product",
}),
]))
```
---
