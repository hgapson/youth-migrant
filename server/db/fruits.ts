import connection from './connection.ts'
import { Fruit } from '../../client/components/models.ts'

export async function getAllFruits(db = connection): Promise<Fruit[]> {
  return db('fruit').select()
}
