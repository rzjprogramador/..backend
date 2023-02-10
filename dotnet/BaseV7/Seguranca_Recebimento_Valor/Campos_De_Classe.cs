namespace segurancaRecebimentoValor;

public class CamposDeClasse 
{
  public string campo_NaoPodeSerNulo { get; set; } = default!; // este campo esta seguro que nao pode receber nada/nulo

  public string? campo_PodeSerNulo = default! ; // mostra no tipo que pode receber nulo - entao tenho que verifica-lo ou dar um valor padrao pra ele se vier a vir sem nada/nulo

  public required string campoObrigatorioNaInstanciacao { get; set; } // required torna este campo obrigatorio na instanciacao da classe

  // #TODO : fazer constructor em c#

  // public CamposDeClasse(string campo1 = default!) {
  //   this.campo1 = campo1;
  // } 
  
}