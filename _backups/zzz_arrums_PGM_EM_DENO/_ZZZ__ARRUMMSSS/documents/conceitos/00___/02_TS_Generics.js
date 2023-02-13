{
  nome: 'Generics',
  objetivo: 'No ocntrato avisar que vai tipar de alguam forma simbolica -- e no uso na funcionalidade que implementa a tipagem passar o tipo real, ',

  contexto: `
  // GENERICS ::
- 1-  AVISO AO PAI QUE VOU TER UM TIPO QUALQUER
- 2-  DENTRO DO ESCOPO DO PAI USO ESTE SIMBOLO DO AVISO
- 3- ONDE FOR USAR EM OUTRO LUGAR ESTA FUNCIONALIDADE DO PAI - MOSTRO AO PAI QUAL É O REAL TIPO QUE PROEMTI AO PAI QUE TERIA

exemplo:
abstract class Entity<T> // 1 -  <<< AVISANDO O PAI {
    constructor(private readonly props: T //<<< 2- USANDO O AVISO NO ESCOPO DO PAI
    ) {}

    class User extends Entity<UserProps> // <<< 3- USO - MOSTRANDO AO PAI QUAL O REAL TIPO {
        constructor(props: UserProps // <<< 3-2 - MOSTRANDO A REAL DO PROMETIDO AO PAI) {
          super(props)
        }
        `,
    exemplo: `
    // CONTRATO ENTIDADE
abstract class Entity<T> {
  constructor(private readonly props: T) {}
}

// USO CLASSES ===========
type UserProps = { nome: string; idade: number; casado: boolean }

class User extends Entity<UserProps> {
  constructor(props: UserProps) {
    super(props)
  }
    `,
}