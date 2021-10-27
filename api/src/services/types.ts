import type { Prisma } from '@prisma/client'

/**
 * Posts
 */
export interface CreatePostArgs {
  input: Prisma.PostCreateInput
}

export interface UpdatePostArgs extends Prisma.PostWhereUniqueInput {
  input: Prisma.PostUpdateInput
}

/**
 * Contacts
 */

export interface CreateContactArgs {
  input: Prisma.ContactCreateInput
}
