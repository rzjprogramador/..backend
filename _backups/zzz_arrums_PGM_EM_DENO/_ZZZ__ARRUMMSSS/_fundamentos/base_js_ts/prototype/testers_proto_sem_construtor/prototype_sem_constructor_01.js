

class Entidade3 {
  
    create(one, two) {
      this.p1 = one
      this.p2 = two
      // O QUE É VAR DA CLASSE RECEBE OS ARGS DE FORA
      return { one: this.p1, two: this.p2 }
      // E RETORNA UM OBJETO MODELO ARGS COM AS VARS DA CLASSE PREENCHIDAS PELOS ARGS 
    }
    
    metodoDNA1() {
      return 'oi sou metodo12'
    }
  
  }
  
  
  // const i3 = new Entidade3('vp1', 'vp2') // CRIANDO PELO CONSTRUCTOR
  const i3 = new Entidade3() 
  // SEM CONSTRUCTOR TEM QUE CRIAR OBJETO VAZIO PRIMEIRO

  const created = i3.create('c1', 'c2') 
  // DEPOIS DE CRIADO A INSTANCIA PODE USAR OS METODOS DO PROTOTYPE DA CLASSE QUE ESTA NO OBJETO.
  
  console.log(i3)
  console.log(i3.metodoDNA1())
  // PRIMEIRO TEST CLASSE SEM CONSTRUTOR E O METODO CREATE
  
  // RESUMO: SEM O CONSTRUCTOR - NO USO TEM QUE PRIMEIRO CRIAR UM OBJETO DA ENTIDADE - DEPOIS USAR O METODO CRIAR / E OUTROS QUE TIVER NA CLASSE QUE ESTARAM NO PROTO :: PARA DAR CERTO NO METODO CREATE TEM QUE USAR AS VARIAVEIS DA CLASSE RETORNANDO UM OBJETO 
  
  