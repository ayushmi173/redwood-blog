import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'
import { CreatePostArgs, UpdatePostArgs } from 'src/services/types'

export const posts = () => {
  return db.post.findMany()
}

export const post = ({ id }: Prisma.PostWhereUniqueInput) => {
  return db.post.findUnique({
    where: { id },
  })
}

export const createPost = ({ input }: CreatePostArgs) => {
  return db.post.create({
    data: input,
  })
}

export const updatePost = ({ id, input }: UpdatePostArgs) => {
  return db.post.update({
    data: input,
    where: { id },
  })
}

export const deletePost = ({ id }: Prisma.PostWhereUniqueInput) => {
  return db.post.delete({
    where: { id },
  })
}
