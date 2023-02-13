# REPOSITORIO IN MEMORIA SINGLETON COM ARRAY STATICO
>> PARA LISTAR DADOS VINDOS DO HTTP REQUEST

> logica:

- criar propriedade static
- usar esta propriedade no metodo :: verificando se ela sendo da classe "NAO" estiver com valor ou instanciada ..retorna ela entao ... senao retorna ela mesmo.
- obs: esta foi solucao ok para listar items de um array no repositorio in memory ... com entrada dados vindos via request http... a abordagem normal sem prop static com dados via request devolvia um array vazio , porque sempre criava uma nova instancia do array ao add item.

> exemplo:

```
static items: CartItem[] = []

list() {
if (!PedidoRepositoryMemory.items) {
    return PedidoRepositoryMemory.items
}
return PedidoRepositoryMemory.items
}
```

---
