import { Cliente } from '@src/domain/entities/participante/cliente/entity/cliente';

export type IClienteProps = {
    nome: string
    email: string
    identificador: string
    //   endereco?: EnderecoProps
}

export type ClienteRequest = IClienteProps

export type IClienteCreate= Partial<Cliente>
