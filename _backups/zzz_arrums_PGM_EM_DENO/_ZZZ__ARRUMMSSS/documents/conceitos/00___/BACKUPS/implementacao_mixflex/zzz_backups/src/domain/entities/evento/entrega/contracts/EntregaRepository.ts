import { Entrega } from '@src/domain/entities/evento/entrega/entity/entrega'

export interface EntregaRepository {
  findById(id: string): Promise<Entrega | null>
}
