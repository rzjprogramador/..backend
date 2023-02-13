// deno-lint-ignore-file
// deno-lint-ignore-file prefer-const

// TABUADA

function tabuadaRetornoEmNumeros(tabuadaDo: number): number[] {
  const list: number[] = [];
  let inicio = 1; // inicio cada tabuada

  while (inicio < 11) {
    let item = tabuadaDo * inicio; // logica
    list.push(item);
    inicio++;
  }
  return list;
}
// console.log(tabuadaRetornoEmNumeros(1));
// console.log(tabuadaRetornoEmNumeros(2));
// console.log(tabuadaRetornoEmNumeros(3));

/* *************************************************** */

function tabuadaRetornoEmListaDeTextos(tabuadaDo: number): string[] {
  const list: string[] = [];
  let inicio = 1;

  while (inicio < 11) {
    let item = `${tabuadaDo} x ${inicio} = ${tabuadaDo * inicio}`;
    list.push(item);
    inicio++;
  }
  return list;
}
// console.log(tabuadaRetornoEmListaDeTextos(4));
// console.log(tabuadaRetornoEmListaDeTextos(5));
// console.log(tabuadaRetornoEmListaDeTextos(6));

/* *************************************************** */

// as mesmas tabuadas em for

function tabuadaRetornoEmListaDeTextosFOR(tabuadaDo: number): string[] {
  const list: string[] = [];
  for (let inicio = 1; inicio < 11; inicio++) {
    let item = `${tabuadaDo} x ${inicio} = ${tabuadaDo * inicio}`;
    list.push(item);
  }
  return list;
}
console.log(tabuadaRetornoEmListaDeTextosFOR(10));
