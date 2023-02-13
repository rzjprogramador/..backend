- criar a pasta node_master ..pra ser o master dos node.

- como a entidade User ta conhecendo o makeId, posso criar a classe abstrata Pessoa e fazer User extende-la pra user nao conhecer nunguem, só reconhecerem user.

- campos que o sistema vai configurar o valor fazer o mesmo que fiz com o id.

- Casa: cada repo Git criar pasta exemplos e nela cplocar projetos hard e dinamicos.
- excluir :: graphql JS
- typeDefs User descomentar perfil que esta retornando nulo.
...

GRAPHQL
.....
error : excessao:
- Criar uma unica msg de excessao para sempre captura-la no formatError
- e onde for usa-la completar a string com o restante do texto.
- ....

....
auto merge resolvers : https://github.com/ardatan/graphql-tools/issues/486
...
criar proprio roteador node :: aos 1:39:14
https://youtu.be/P0gpCCA8ZPs
...........
EM PRODUCAO:
para O modulo Hello: 

- fazer match da Entidade typeDefs com Entidade Modulo e Banco
- fazer typeDefs das Mutation que serao as acoes dos casos de uso e resolvers
- fazer resolvers que usaram os servicos
- fazer o test InMemory
- fazer o test E2E
....

....

APRENDIZADO:

fazem_match: [
'typeDefs Mutation > Mutation {} > resolverCasoDeUso, casoDeUso',

'EntidadeModulo > EntidadeTypeDefs > EntidadeModelBanco > Parcialmente DTORequest' ,

]

......

IMPLEMENTAR

Testes E2E : Memory e Prisma > rocket
https://youtu.be/w_el04y0cHo


- Desaclopa req, res express - Controlador recebe HttpRequest byMang aos 01:13:10

- rotas -- aos 1:38:00
- aps 1:43:00 -- CLEAN MANG SÓ  USA O REQ, RES DO EXPRESS PELO NO CONTROLE AO DEFINIR O  BREAKPOINT DA ROTA QUE FAZ AS  INJETACOES DAS DEPENDENCIAS DO SERVICO....ALI TEM Q TER O REQ, RES PORQUE QUEM CAPTURA A PRIMEIRA REQUISICAO E DA A RESPOSTA FINAL É O EXPRESS
https://youtu.be/P0gpCCA8ZPs

......
==============
LINKS ::

- Graphql >  Tratar Erros - Stack Trace : https://youtu.be/eVdCr7SXY1g


PADRAO ADAPTER NA API __ manguinho
aos 1:08:00
https://youtu.be/P0gpCCA8ZPs
...
- ....
- schema file load // podera importar arquivos graphql >> https://youtu.be/I79_b7K0rIk



=================
TOP AULAS MUSICA

- Funcoes Melodicas: 
- Peterson : https://youtu.be/OgsFUxqBR-8
- 
.....

BRANAS  MANGUINHO
ROTAS >> 1:49:00

......
TSCONFIG

- 
....
CAPTURADO PDF VAI PRO ADAPTER E RETORNA UM ENDERECO E DAI VAI PRO CONTROLE - PRA PASSAR PRO SERVICO E GRAVAR
....
Eslint Prettier

instalar extensoes Eslint e Prettier

aos 35:26 rocket > https://youtu.be/rCeGfFk-uCk

plugin eslint config prettier > Braga
https://youtu.be/r2yzlFz7Ua4


yarn eslint
yarn eslint --init // configurar ele vai dar tudo que precisa configurar e criar .eslintrc
posso criar o eslint-ignore tbm.

https://youtu.be/zEg3noZQNZ4

- no Settings.json do vscode
se deixar true o eslint-fix onSave ele bai tentar corrigir o codigo..melhor deixar false pra nao ter interversao. // diz que nao funciona mai ????
...
aula 203 js ts Otavio - eslint prettier
.....

TESTS JEST

MOCAR :: É fazer um clone da Funcao Verdadeira , e assim o que passar no test vc faz o TDD repassando pra verdadeira o que deu certo testado , assim ja testa junto seu contrato . por convencao  hame-a de sut a funcionalidade que vai testar.

Tutorias: OtavioLemos: https://youtu.be/fOOpUvHlO2c,


....

ERROS
Evite lancar excessao throw , retorne o erro tratado pra quem for usar.
aos 4:16
https://youtu.be/fOOpUvHlO2c
......

TYPEGRAPHQL

- Tratar Erro - fazendo erro nao aparecer sem feedback  : aos 3:19 > https://youtu.be/GOabT6sQquY

- testar TDD : aula 14 TDD  USER
- aos 1:07:00 > https://youtu.be/T7B_JPLhgOU



.......

CADASTRADOS :
MAPA MENTAL :: Mind Mup : (https://www.mindmup.com/ 
registro: rzjprogramador
.....
CODIGO FALADO GRAPH-PRISMA-NESTJS-TEST

========
VERDADE:: COMEÇANDO TEST:
https://youtu.be/T7B_JPLhgOU?t=4574

AGORA:
https://youtu.be/T7B_JPLhgOU?t=5549

=========

Resolve path alias nest
https://github.com/nestjs/typescript-starter/issues/74




===========
- inserir seed :: aos 2:50:40 >>
- https://youtu.be/A1oSu-VMWjc

-  automatizar tests com env exemplo : AMBIENTE DE CI
- https://youtu.be/T7B_JPLhgOU?t=3951

- explicacao como fazer test no Nest:
- https://youtu.be/Owo41bJuNcI?t=13320
- 
TDD CRUD USERS --apartir da marcacao video > https://youtu.be/T7B_JPLhgOU

- CRIANDO O ENV.TEST para rodar tests com o prisma:
- https://youtu.be/Owo41bJuNcI?t=13560

- ENV- TEST CONFIGURANDO URL
aos 4:47:00  >> https://youtu.be/Owo41bJuNcI
- 
- ENFIM CRIANDO O NODE ENV PRA TESTS
- https://youtu.be/Owo41bJuNcI?t=14210
- 
- ENV TEST CONFIGURANDO BANCO_TEST
AOS 58:50 > https://youtu.be/T7B_JPLhgOU


....

TEST E PAGINACAO --GRAPHQL >> https://youtu.be/T7B_JPLhgOU?t=13614
...
Cursos Grátis 
https://www.estartandodevs.com.br/
....
Erros Nest :: tentar apagar apasta dist/ e rodar o server com : nest star --watch
.....
mind map mapa visual aos 1:18:00 > https://youtu.be/Owo41bJuNcI
....
comando resetar force o banco 
yarn prisma pretest 
aos 1:13:30 >> https://youtu.be/T7B_JPLhgOU
....
CRUD - PRISMA ::
By Salvatorre : aos 51:10 > https://youtu.be/8IwUvk6hZaI
....
FERRAMENTAS TOPS ::

Lousa Digital tipo mapaMental:: 
- Miro: ( https://miro.com/pt/ )
....
ficar de olho que o figma esta criando tbm .
....
INICIO TEST CODIGO FALADO
AOS 3:38:00 https://youtu.be/Owo41bJuNcI
....

=====================

........
BAIXAR 

PDF - CODIGO LIMPO https://github.com/free-educa/books/blob/main/books/Codigo%20Limpo%20-%20Completo%20PT.pdf
........

Baixar Pirata

NLW Next Level Week
https://cursospirata.com/2022/03/14/next-level-week-4/
....

