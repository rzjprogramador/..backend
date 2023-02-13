class Loops {
  public readonly conceito_loops_universais_while_e_for =
    "enquanto a condicao passada for verdade, faça :: repita estes comandos.";

  private static enquanto_while = `
    sintaxe: inicializacaoVarForaModificavel_e_Retornavel ... enquanto (condicao) { faca; passos_Parada++ }

    private static para_cada_for:
    sintaxe: paraCada (inicializacaoVarForaModificavel_e_Retornavel; condicao, passos_Parada++) {
      faca} ;
      `;

  private static refatoracao_diferencas = `
    diferencas_while_e_for: nao precisa iniciar a varFora e nem incrementar os passos do iterador de parada dentro do bloco... o restandte é igual

    se_implementou_em_while: só recortar a var que da o inicio ao contador do loop e colocar no 1º param do for; e a var incrementada que da os apssos do inicioIterador recortar e colocar no 3º param do for`;

  private static implementacoes_no_loop = `
  retornando_o_tipo_de_dado_que_precisar:
    - as vars e o loop que ia fazer sem escopo faço tudo dentro do escopod e uma funcao
    - var que vai ser incrementada nao pode ser constante
    - o incremento dentro do while tem que ser por ultimo.
    - dou o valor inicial da var_de_Um_Tipo_HaSerModificada_E_RETORNADA o tipo dela tem que ser o tipo do objetivo que quero retornar na funcao...como quero mostrar este resultado.
    - a rodagem do iterador que ia visualizar no console.log, coloco num var e faço insercao na var_de_Um_Tipo_HaSerModificada_E_RETORNADA inicializada fora e retorno esta var_de_Um_Tipo_HaSerModificada_E_RETORNADA depois de modificada;
    `;
}
export default new Loops();
