export const schema = gql`
  type User {
    id: String!
    name: String!
    email: String!
    password: String!
    contactNumber: String!
    address: String!
    age: Int!
    posts: [Post]!
  }

  type Query {
    users: [User!]! @skipAuth
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
    contactNumber: String!
    address: String!
    age: Int!
  }

  input UpdateUserInput {
    name: String
    email: String
    password: String
    contactNumber: String
    address: String
    age: Int
  }

  input LoginInput {
    email: String
    password: String
  }

  type Mutation {
    createUser(input: CreateUserInput): User! @skipAuth
    loginUser(input: LoginInput): User @skipAuth
  }
`
