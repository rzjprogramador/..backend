import { UserModel, TypeUser, ArgsCreateUser } from '@src/Modules/User/_Core/Contracts/UserContracts'

export class User {
	public readonly id?: string
	public primeiroNome: string
	public complementoNome: string
	public email: string
	public cpf: string
	public typeUser: TypeUser

	constructor(user?: ArgsCreateUser) {
		Object.assign(this, user)
	}

	// constructor(user?: Omit<ArgsCreateUser, 'id'>, id?: string) {
	// 	Object.assign(this, user)
	// }

	// async create(user: ArgsCreateUser) {
	// 	Object.assign(this, user)
	// 	return await user
	// }

	async getNomeCompleto() {
		return await `${this.primeiroNome} ${this.complementoNome}`
	}

	async getPropsUserDefault(cpf = this.cpf) {
		return await { cpf }
	}

}

// export default new User()

