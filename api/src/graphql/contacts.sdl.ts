export const schema = gql`
  type Contact {
    id: String!
    name: String!
    email: String!
    message: String!
  }

  type Query {
    contacts: [Contact!]! @requireAuth
  }

  input CreateContactInput {
    name: String!
    email: String!
    message: String!
  }

  input UpdateContactInput {
    name: String
    email: String
    message: String
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @requireAuth
  }
`
