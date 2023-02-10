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
 
 importar: chamar o keyword "using" <nomeDo_namespace_do_alvo> e dentro do bloco instanciar caso nao statica ou chamar a classe alvo caso statica. e usar o emtodo membro dela;

tornar_exportavel: explicitar ser publica e statica ex: public static

usar_importada: para usar a funcao desta classe em outro lugar - tenho que instancia-la ou chama-la se for statica fora daqui. 

 e o metodo dela pra ser acessivel tem que ser public static
 por_padrao: nao esta sendo public e nem static se nao explicitar
 */