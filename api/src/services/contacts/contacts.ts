import { db } from 'src/lib/db'
import { CreateContactArgs } from '../types'

export const contacts = () => {
  return db.contact.findMany()
}

export const createContact = ({ input }: CreateContactArgs) => {
  return db.contact.create({
    data: input,
  })
}
