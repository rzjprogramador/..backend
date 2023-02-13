/* eslint-disable @typescript-eslint/no-unused-vars */
import { ModelProduct } from '@src/core/product/entity/product.contract'
import { seedProductOne, seedProductTwo, seedProductTree } from './seedsProducts'


export const seedProductCollection: ModelProduct[] = [
  seedProductOne,
  seedProductTwo,
  seedProductTree
]