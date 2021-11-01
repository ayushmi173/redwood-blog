import { UserInputError } from '@redwoodjs/graphql-server'
import { db } from 'src/lib/db'
import { CreateContactArgs } from '../types'

const CONTACTS_PER_PAGE = 7

const validateContact = ({ input }: CreateContactArgs) => {
  if (input.email && !input.email.match(/[^@]+@[^.]+\..+/)) {
    throw new UserInputError("Can't create new contact", {
      messages: {
        email: ['is not formatted like an email address'],
      },
    })
  }
}

export const contactPage = async ({ page = 1 }: { page: number }) => {
  const offset = (page - 1) * CONTACTS_PER_PAGE
  const contacts = await db.contact.findMany({
    take: CONTACTS_PER_PAGE,
    skip: offset,
    orderBy: { createdAt: 'asc' },
  })
  return {
    contacts,
    count: db.contact.count(),
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
