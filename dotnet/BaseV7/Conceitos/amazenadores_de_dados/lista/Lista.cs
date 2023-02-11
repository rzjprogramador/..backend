namespace armazenadoresDeDados;

public class Lista {
  public static List<System.String> VerLista () {
    List<string> nomes = new List<string>();
    nomes.Add("rei");
    nomes.Add("guga");
    nomes.Add("leo");

    List<string> result = new List<string>();

    foreach (string n in nomes ) {
      result.Add(n);
    }
    return result;
  } 
}