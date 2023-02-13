{
  tecnologia: `Typescript`,
  acao: `Definir um valor default para enum`,
  conceito: `Defina o EnumAlvo[Pegue na posicao zero o valor que deseja default]  ... capture e use esta captura onde precisar do valor default`,
  sintaxe: `<varCaptura> = NomeEnum[VALOR DO ENUM DESEJADO]`,
  acao: ``,

  exemplo: `
  const tipoUserDefault = TipoUser['CLIENTE_PJ']
  // onde precisar do valor default do enum use a variavel :: tipoUserDefault
  
  `,
  tutorial: ['https://www.codegrepper.com/code-examples/typescript/typescript+default+enum'],
  exemplo_tutorial : `
  enum AnEnum {
    One = 1,
    Two = 2
}
let stringOne = AnEnum[1]; // "One"
let stringTwo = AnEnum[AnEnum.Two]; // "Two"
`,
},

