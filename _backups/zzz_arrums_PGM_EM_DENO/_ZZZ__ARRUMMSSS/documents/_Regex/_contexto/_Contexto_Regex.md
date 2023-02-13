# REGEX

---

> doc: [doc Mozilla Regex](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)

> contexto:
  'regex será uma regra, um modelo mascara ond evai desejar fazer match combinar com a sua pesquisa.'

> uso_literal:
  '/expressao no meio das 2 barras /<flags_geral>'
    obs: com 2 barras para regex literais que ja sabe o valor da string/target nao usa aspas só em no obj new Regex()

> uso_construtor:
  'usar construtor new RegExp("") só dentro de funcoes onde a string/target virá de um input do client.'

---

### instrucoes_de_comando :
> conceito_intrucoes_de_comando:
'a regra passada sao os comandos de pesquisa ... a maioria dos simbolos comandos  agem sobre o seu antecessor.'

> narrativa_iniciar:
'^"COMO VAI COMEÇAR" --> "PODE SE REPETIR?" -->"COMO VAI TERMINAR" $'

---

### metodos_regex_no_prototipe_de_strings: [match, split, replace]
  match: 'faz a pesquisa combina, devolve um array do encontrado.'

  split: 'vai dividir o que foi passado como regra'

  replace: 'terá dois params, 1º a regra de pesquisa, 2º o que quér substituir o pesquisado pela regra.'

---

### flags_opcoes_geral_sobre_a_pesquisa:
  global: 'g == global "todos" na string alvo'
  ignore: 'i == ignore case, pega tanto maiusculo quanto minusculas'
  multiline: 'm == multiline, pesquisa em linhas quebradas tambem'

---

### pesquisas_com_caracteres_especiais:
  > contraBarra:
  '\LETRA_MINUSCULA pega tudo que a letra representa.'

  > contraBarra:
  '\LETRA_MAIUSCULA  faz o contrario da Minuscula pega todos e IGNORA o que a letra representa.'
  \d : pega todos numeros .
  \D: ignora todos os numeros
  \w: pega todos alfanumericos "textos e numeros e quebras de linha ... menos espaco".
  \W ignora todos alfanumericos e quebras de linha
  \s: pega todos espacos
  \S: ignora todos espacos
  \ : contra barra invertida escapar o que seria comando para uar mesmo como carctere. ex: quero usar o cifrao que é uma instrucao de comando reservada uso o barra invertida antes dele ai ele pode ser usado como cifrao caractere mesmo.

  \. : contra barra invertida com ponto para poder usar o ponto como ponto mesmo e nao comando quero ter um pnto neste local

---

### agrupamentos:[ colchetes, parenteses]

> colchetes:
  agrupa "LISTA DO QUE É POSSIVEL ENCONTRAR NO ALVO" ,"UM", "OU", "ENTRE",  uma colecao selecao de varios entre o que foi passado,  ou "OU" seria o mesmo de | pipeline "Um ou Outro"

> parenteses:
  agrupa exatamente o que passar "EXATO".
casos_exato :


> selecionador:
ponto == qualquer coisa "PEGA TUDO"

> opcional:
  > interrogacao:
   '"?" torna o antecessor opcional, equivalente: {0,1} // NENHUAM OU UMA VEZ'

 > tornar uma selecao de regra opcional:
  'coloca o trecho dentro de () parenteses e depois dele o ? ...obs: o ? vem depois dos () onde esta o trechoRegra que quér como opcional.
  ex: (\.[a-z]+)?'

---

### multiplicadores:
  > sinal de mais:
    '== pega a repeticao do seu antecessor, "QUANTAS VEZES EU QUISER O QUE ESTA ANTESCENDENDO", equivalente: {1,} // UM OU VARIOS.
    ex: 0+ vai pegar o que repetir de 0.,
    ex: [a-z]+ vai pegar o que tiver de a-z quantas vezes houver.'

  > chaves:
    '==  coloca dentro quantas vezes quer pesquisar do seu antecessor , separados por virgula 1° o minio, 2°o valor do maximo da pesquisa, obs: nada colocado ele comeca ou termina sem limite de fim. "QUANTAS VEZES NO MINIMO , E MAXIMO ?".'

---

### repetidor:
  > asteristico:
    "* asteristico " alternativa {0,} narrativa: "SEMPRE QUE REPETIR O ANTECESSOR" || "Nenhuma ou varias Vezes"

