import type { Prisma } from '@prisma/client'
import {
  AuthenticationError,
  ResolverArgs,
  UserInputError,
} from '@redwoodjs/graphql-server'

import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import { db } from 'src/lib/db'
import {
  CreateUserArgs,
  ISanitizedUser,
  IUserWithToken,
  LoginUser,
} from '../types'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }: Prisma.UserWhereUniqueInput) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const User = {
  posts: (_obj, { root }: ResolverArgs<ReturnType<typeof user>>) =>
    db.user.findUnique({ where: { id: root.id } }).posts(),
}

export const loginUser = async ({
  input,
}: LoginUser): Promise<ISanitizedUser> => {
  const user = await db.user.findUnique({
    where: {
      email: input.email,
    },
  })

  if (!user) throw new AuthenticationError('User is not found with given email')

  const isMatchedCredentials: boolean = await bcrypt.compare(
    input.password,
    user.password
  )

  if (!isMatchedCredentials)
    throw new AuthenticationError(
      'You have entered wrong password, Please enter correct password'
    )

  return login(user).user
}

export const createUser = async ({
  input,
}: CreateUserArgs): Promise<ISanitizedUser> => {
  try {
    const existingUser = await db.user.findUnique({
      where: {
        email: input.email,
      },
    })

    if (existingUser)
      throw new UserInputError(
        'User is already registered with entered email address'
      )

    const password: string = await bcrypt.hash(input.password, 10)
    const data = { ...input, password }
    const user: ISanitizedUser = await db.user.create({
      data,
    })
    const token = login(user)
    console.log('Token will saveed in cookie', token)
    return user
  } catch (error) {
    console.log('called', error)
    throw new UserInputError(error.message)
  }
}

export const login = (user: ISanitizedUser): IUserWithToken => {
  try {
    const token: string = jwt.sign(
      {
        id: user?.id,
        email: user.email,
      },
      'get-secret-from-env',
      {
        expiresIn: '30d',
      }
    )

    return { user, token }
  } catch (error) {
    console.log('mjrnrnjigjr', error)
  }
}
