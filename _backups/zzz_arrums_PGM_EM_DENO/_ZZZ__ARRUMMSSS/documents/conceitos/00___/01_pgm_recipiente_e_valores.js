// VARIAVEIS A ESQUERDA
{
  variavel_de_fora_a_direita: {
    narrativa: `"TRAZER ALGO"`,
    possibilidades: ['trazer a informacao', 'trazer resultado', 'trazer resposta'],
    trazer_informacao: `Quem traz a informacao geralmente é uma expressao | prop | metodo passando ou nao outras props`,
  },

  variavel_de_dentro_a_esquerda: {
    narrativa: `"OBTER e GUARDAR | CRIAR | CAPTURAR"`,
    possibilidades: ['obter e guardar a informacao', 'capturar o resultado', 'obter resposta'],
    obter_informacao: `Quem obtem e guarda uma informacao é uma variavel auxiliar criada e declarada no local a esquerda e serve para evoluir transformar o dado.`,
  },
}

// EVOLUCAO :: CRIACOES

{
  quero_criar_mini_artefato: `crio constante a esquerda = algum valor pronto`,
  quero_obter_algum_resultado: `
  crio constante response a esquerda = algum caminho.metodo que cria algo.
  - exemplo: const response = props.create({...}) `,
}

// TRANSFORMAR INFORMACAO OBTIDA
{
  podemos_transformar_informacao_obtida: ['com metodo passando a informacao', 'juncoes de variaveis com valores transformadores' ]
}

// ANOTACOES === ARRUMAR ======

Programacao tem muito da matematica.

METODO DO ARRAY : find() buscar() faz uma equacao pra saber qual é o igua5l procurado.
tutorial equacao : https://youtu.be/zIk2L2vdAkg
....
conceito: `para usar algo este tem que estar guardado na memoria.`,

o_que_quero_e_posso  : tudo que quero fazer ...esta relacionado ao  "posso" da ferramenta... se a ferramenta dispoem.

pegar_algo: `é um getter , uso um comando, ja guardado na memoria...posso usar direto ou dependendo com alguma clausula pra de retorno.`,

se_estou_pegando: {
  e_porque: quero pegar e mostrar | tornar publico pra fora | compartilhar algo.
}

setar_configurar_algo: `
é um setter vou configurar um valor ou obter algo, uso direita e esquerda. separados por sinal de atribuicao e assim tenho algo configurado com valor e guardado na memoria posso continuar evoluindo ou retorna-lo pra outro que precise de algo pronto na memoria usar.

`,
se_estou_setando: {
  e_para: quero criar |quero obter_guardar |  modificar algo
},

guardar_algo_na_memoria: {
possibilidades: [recipiente esquerda, 'valor_direita, jaGuardado ],

quando_preciso_o_que_e: {
  recipiente: tudo a esquerda antes de sinal de atribuicaoa...é onde obtenho e espera um valor.
  
separacao: 'esquerda e direita sao separados por sinal de atribuicao :: ":" para objetos Filhos .... e "=" para propriedades Pai',

valor:é tudo a direita depois do sinal de atribuicao ... onde ou ja é uma ultima instancia de primitivo  é valor final,  ou se nao for primitivo é caminho encadeado de  variavel || objeto tendo && .metodo que levam ou trazem o valor.
},

esquerda : chave | referencia| como o valor vai ser acessado |  que obtem e guarda. >> lugar na memoria.

direita: valor | informacao |  ocupa na memoria.

se nao usar esquerda e direita nem sinal de atribuicao é um comando , algo pronto resolvido .... e esta ja estara usando uma informacao ja guardada na memoria.
.....

com este conjunto esquerda direita separados por atribuicao : posso :: [ obter, criar, modificar algo ],

....
valores: {
  conceito: 'é tudo a direita que vem depois do sinal de atribuicao...quem o usa copia o seu tipo de valor ..e cada um tera seu local na memoria ,
  
possibilidades: [primitivo , referencia ]
},

primitivo: {
conceito:  'sao imutaveis ...vc muda o conteudo mas nao muda o tipo.'

exemplos: ' string, number, boolean, undefined, null',
}

referencia: {
conceito: ` é mutavel podemos mudar seu tipo, quem o usa aponta para o mesmo valor na memoria.

 objeto.metodo ou chave ultima instancia que leva ao valor  final, referencia objeto.metodo ou chave ultima instancia que leva ao valor final. `,

exemplos: ` variavel, objeto, metodo.`,
}
.....

Pai : é um criador.
Filho: é o que usa.

exemplos_Pai : [ 

 ],

exemplos_Filho : [ 

 ],

contextos_Pai_e_Filho: [ 

 ],
......
modificacoes: {
  transformar_dado_recebido: {
    conceito: `receber o dado, transformar e devolver modificado.`,
    
o_que_transforma_um_dado_recebido: `um metodo ja pronto e passamos nosso dado `,
}}

criar_dado_com_combinacoes: {
  em uma expressao combina variaveis usando operadores e o resultado atribui a uma variavel resultado.
  pronto tera um dado criado
}

.......

operadores_logicos:

tecnologia: Javascript_Typescript

conceito: `os operadores logicos sao para_formar_instrucoes para chegar a um valor.`,

 E_ algo_e_outro: ' && ',
 
 OU_algo_ou_outro: '!!',
 
 afirmacao_garantindo: 'variavel_!  interrogacao apos valor',
 
 negacao_negando: 'interrogacao antes do valor',

transforma_em_boleano: 'Duas interrogacoes antes do valor se o valor for falso retorna false ou verdadeiro retorna true'

