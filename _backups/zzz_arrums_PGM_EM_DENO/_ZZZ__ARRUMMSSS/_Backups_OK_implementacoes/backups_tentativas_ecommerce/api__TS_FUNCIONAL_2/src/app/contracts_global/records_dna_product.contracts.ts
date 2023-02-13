

export interface RecordsDNAProduct {
    createdAt: Date | string
    updatedAt: Date | string
    removedAt: Date | string
    statusActive: StatusActive
}

type StatusActive = 'Ativo' | 'Desativado'