import { db } from 'src/lib/db'
import { CreateContactArgs } from '../types'

export const contacts = () => {
  return db.contact.findMany()
}

export const createContact = async ({ input }: CreateContactArgs) => {
  return await db.contact.create({
    data: input,
  })
}
