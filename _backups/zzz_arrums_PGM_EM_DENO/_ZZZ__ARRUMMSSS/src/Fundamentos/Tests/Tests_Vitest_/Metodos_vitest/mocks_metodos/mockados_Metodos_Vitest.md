# SEMANTICA TESTS

describe: é um agrupador de suites , traducao: descricao,

it_ou_test: é uma suite de test, traducao: it == este, test == teste

semantica: descrevo que " em EntidadeCategoria" esta "[EntidadeASerTestada]" :: deve fazer algo,

exemplo_semantica: describe('in Entidade') it ('[entidade a ser testada] deve retornar true ')

---

# METODOS VITEST

### METODOS DO OBJETO GLOBAL DO FRAMEWORK:

funcoes_globais_no_topo_do_test:
objeto_com_metodos_do_framework: o vitest ao importar o objeto "vi" se dér ponto "." podemos acessar e usar seus metodos disponiveis globais nos tests

limpar_o_resultado_de_cada_test: obs: parece que nao precisa mais do afterEach só adicionar a funcao no topo : vi.clearAllMocks()

limpar_o_resultado_de_cada_test: funcao afterEach( que recebe uma funcao pra limpar os mocks usados nos tests abaixo) ex: afterEach(() => vi.clearAllMocks()) // limpar os mocks usados em todos os tests abaixo.

palavra_chave: limpar cada test mockado mock
rasteg: #limpar_cada_mock_de_test

---

beforeEach == ANTES DE TUDO CARREGAR - LIMPAR AS VARIAVEIS:

usar beforeEach(() => { ... aqui o que vai carregar antes de todas as suites})
// Se for carreagr variaveis para serem globais declare antes ela fora da funcao e na funcao coloque sua referencia para assim carregar anets dos tests

```
ex:
 let sut: ItemsRepositoryMemoryProduction
  let LinkInput: ProductModel

  beforeEach(() => {
    sut = new ItemsRepositoryMemoryProduction()
    LinkInput = fakeItemProductencomenda
  })

```

---

# FUNCOES PARA COMPARACOES EM ASSERCOES DE TESTS

retorne_undefined: toBeUndefined(),

que_tenha_algum_retorno: toHaveReturned()

se_ja_foi_chamado_pelo_menos_uma_vez: toHaveBeenCalled(),

se_foi_chamado_quantas_vezes_passado: toHaveBeenCalledTimes(1),

assertar_qual_e_a_instancia: toBeInstanceOf (Function ou NomeClasse ou Class ou Object)

verificar_se_tem_a_propriedade_e_se_nela_tem_o_valor: toHaveProperty ('propriedade?', 'valor?')

verificar_se_numero_float_esta_proximo_do_passado_arredondado_pra_cima: toBeCloseTo(10.90)

comparar_dois_objetos: toEqual() ... ex: (.body).metodo(new Error) sao 2 objetos body e Error usar a funcao toEqual() que compara os valores dos objetos.

---
