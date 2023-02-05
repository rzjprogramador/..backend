
namespace main {
  class Program {
    static void Main () 
    { 
      // exemplo criacao da List , add valores novos e mostrar o estado atual da List preenchida no Console
      List<int> novosNumeros = new List<int>();
      novosNumeros.Add(11); 
      novosNumeros.Add(22);

      foreach (int v in novosNumeros) {
        Console.WriteLine(v); 
      }
    }
  }
}
