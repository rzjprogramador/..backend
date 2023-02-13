
// ENTIDADES VIA CLASSE EM JS -- OK_RZJ

class Entity {
 nome = 'Default_Classe ate aqui >>>'

  constructor()  {
   this.id= '1'
   this.nome = `${this.nome} +++ BlocoConstrutor Agiu encima da var da classe`
  }

  create (data) {
    const { nome, idade } = data    
    
    const newEntity = {
      id: this.id,
      nome: this.nome,
      idade: idade,
      msg: `o mome é ${nome || this.nome} !!!`      
    }

    return newEntity
  }
}

// Request
const c1Request = {
  // nome: 'Rei',
  idade: 45
}

const c2Request = {
  nome: 'Renata',
  idade: 41
}

// instancia
const makeEntity = new Entity()

// uso
console.log(makeEntity.create(c1Request))
console.log(makeEntity.create(c2Request))

/*
async function showEntitys (entity) {
  return await makeEntity.create(entity)
}
console.log(showEntitys (c1Request))
*/


// ============   FIM.  ==============