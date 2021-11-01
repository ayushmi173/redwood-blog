import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        name: 'String',
        contactNumber: 'String',
        address: 'String',
        age: 248228,
        email: 'String',
        password: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        contactNumber: 'String',
        address: 'String',
        age: 6648955,
        email: 'String',
        password: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
