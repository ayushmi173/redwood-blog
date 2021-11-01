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

export interface IPost {
  id?: string
  title: string
  anchor?: string
  body: string
  postedAt?: string | Date
  createdAt?: string | Date
  updatedAt?: string | Date
  user?: ISanitizedUser
}

/**
 * Contacts
 */

export interface CreateContactArgs {
  input: Prisma.ContactCreateInput
}

/**
 * User
 */
export interface CreateUserArgs {
  input: Prisma.UserCreateInput
}

export interface LoginUser {
  input: {
    email: string
    password: string
  }
}

export interface IUser {
  id: string
  name: string
  email: string
  password: string
  contactNumber: string
  address: string
  age: number
  posts?: IPost[]
}

export interface ISanitizedUser extends Omit<IUser, 'password'> {}

export interface IUserWithToken {
  user: ISanitizedUser
  token: string
}
