import { UserInputError } from '@redwoodjs/graphql-server'
import { db } from 'src/lib/db'
import { CreateContactArgs } from '../types'

const validateContact = ({ input }: CreateContactArgs) => {
  if (input.email && !input.email.match(/[^@]+@[^.]+\..+/)) {
    throw new UserInputError("Can't create new contact", {
      messages: {
        email: ['is not formatted like an email address'],
      },
    })
  }
}
export const contacts = () => {
  return db.contact.findMany()
}

export const createContact = async ({ input }: CreateContactArgs) => {
  validateContact({ input })
  return await db.contact.create({
    data: input,
  })
}
