namespace funcao;

public static class ClasseFuncao 
{
  public static int FuncaoSomaDeInteiros() 
  {
    int a = 10;
    int b = 20;
    int c = a + b;
    return c;
  }
}

/*
 exemplo: funcao que retorna um numero_inteiro
 
 resumo: nao deixa importar uma funcao que nao pertença a uma classe só pode importar metodos, obriga a ter public static para ser importavel, o nome do arquivo nao importa usa o namespace para acessar o objeto e a chamada da classe para acessar o metodo.

 importar: chamar o keyword "using" <nomeDo_namespace_do_alvo> e dentro do bloco instanciar caso nao statica ou chamar a classe alvo caso statica. e usar o emtodo membro dela;

tornar_exportavel: explicitar ser publica e statica ex: public static

usar_importada: para usar a funcao desta classe em outro lugar - tenho que instancia-la ou chama-la se for statica fora daqui. 

 e o metodo dela pra ser acessivel tem que ser public static
 por_padrao: nao esta sendo public e nem static se nao explicitar
 */