
namespace metodosDeTipos;

public static class MetodosDeTextos {
  public static void Execute() {
  var texto = " teste ";
    string concatenados = texto.Trim().ToUpper();
    string semEspacoNoComecoEFim = texto.Trim();
    string maiusculo = texto.ToUpper();
    string minusculo = texto.ToLower();

    Console.WriteLine("concatenados : " + concatenados);
    Console.WriteLine($"semEspacoNoComecoEFim : {semEspacoNoComecoEFim}" );
    Console.WriteLine($"maiusculo : {maiusculo}");
    Console.WriteLine($"minusculo : {minusculo}");
  }
}