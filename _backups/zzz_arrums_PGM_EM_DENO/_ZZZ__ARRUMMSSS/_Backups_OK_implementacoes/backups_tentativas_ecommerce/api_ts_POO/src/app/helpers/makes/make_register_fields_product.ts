import { makeDateCreateAt, makeDateUpdateAt, makeID, makeIDDB } from "@src/app/helpers/makes/makes_log_info"

export interface RegisterFieldsProductType {
  idDB: string
  uid: string
  createdAt: Date
  updatedAt: Date
}

export class MakeRegisterFieldsProduct implements RegisterFieldsProductType {
  public readonly uid = makeID()
  public readonly idDB = makeIDDB()
  public readonly createdAt = makeDateCreateAt()
  public readonly updatedAt = makeDateUpdateAt()
}
