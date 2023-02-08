// Este arquivo ja é a classe principal executando o metodo Main

// using Cliente;
// using System; 

namespace principal;

public class Program {
  public static void Main(string[] args) {

    // seguranca recebimento de dados
    string campo1 = new segurancaRecebimentoValor.CamposDeClasse("foo");
    Console.WriteLine(campo1);

    // metodos de tipos Textos :
    // metodosDeTipos.MetodosDeTextos.Execute();

    // Console.WriteLine(formatacao.Interpolacao.Execute());

  // Console.WriteLine(modulo.ClasseModulo1.Execute1());
  // Console.WriteLine(modulo.ClasseModulo2.Execute2());
  // Console.WriteLine("Oi");
  }
}

