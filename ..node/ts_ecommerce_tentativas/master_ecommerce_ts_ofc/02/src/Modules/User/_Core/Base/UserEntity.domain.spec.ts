// import { test } from 'node:test'
import assert from 'assert'
import { describe, test } from 'vitest'

import { createUserBase } from '@src/Modules/User/_Core/Base/CreateUserBase'

// import User from '@src/Modules/User/_Core/Base/User.entity'
import { FakeUserBaseInstance } from '@src/Modules/User/_Core/Contracts/UserContracts'

// import User from '@src/Modules/User/_Core/Base/User.entity'
import { User } from '@src/Modules/User/_Core/Base/User.entity'
import { createUserEntityMaker } from '@src/Modules/User/_Core/Base/MakeUser'

// Fakers Root
export const fakeUserDefaultBaseInstanceOne: FakeUserBaseInstance = {
	primeiroNome: '111',
	complementoNome: 'complementoNome fakeUserDefaultBaseInstanceOne',
	email: 'oneFakeBaseUser@gmail.com',
	cpf: 'cpfone',
	typeUser: 'user_default'
}

export const fakeUserDefaultBaseInstanceTwo: FakeUserBaseInstance = {
	primeiroNome: 'twoFake',
	complementoNome: 'restante fakeUserDefaultBaseInstanceTwo',
	email: 'twoFakeBaseUser@gmail.com',
	cpf: 'cpftwo',
	typeUser: 'user_default'
}


const makeSut = () => {
	// const sut = new User
	const sut = new User()
	return {
		sut()
	}
}

const { sut } = makeSut()

describe('CreateUserBase >> Sucess', () => {

	test(`deve criar um user Base.`, async () => {
		const current = sut(fakeUserDefaultBaseInstanceOne)
		// const current = sut(fakeUserDefaultBaseInstanceOne)
		const expected = current.primeiroNome == fakeUserDefaultBaseInstanceOne.primeiroNome

		console.log('current >> ', current)
		console.log('expected >> ', expected)

		assert(expected === true)
	})

	test.todo(`[method Proto] deve retornar o nome completo com o metodoProto getNomeCompleto().`, async () => {
		const current = await sut.create(fakeUserDefaultBaseInstanceOne)
		const expected = await (sut.getNomeCompleto())
		// current.prototype.

		// console.log('current obj CreateUserBase >> ', current)
		// console.log('EXPECTATIVA getNomeCompleto() in CreateUserBase  >> ', expected)

		const response = `${current.primeiroNome} ${current.complementoNome}`
		assert(expected === response)
	})

})

describe.todo('CreateUserBase >> Fail', () => {
	const { sut } = makeSut()

	// test(`nao deve ter o campo id nos objetos user base.`, async () => {
	// 	const current = await sut.create(fakeUserDefaultBaseInstanceOne)
	// 	const expected = current.id === undefined

	// 	// console.log('expected nao ter o id in CreateUserBase >> ', expected)

	// 	assert(expected === true)
	// })

})
