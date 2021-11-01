export const schema = gql`
  type Post {
    id: ID!
    title: String!
    anchor: String
    body: String!
    postedAt: DateTime!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: ID!): Post @requireAuth
  }

  input CreatePostInput {
    title: String!
    anchor: String
    body: String!
    postedAt: DateTime!
  }

  input UpdatePostInput {
    title: String
    anchor: String
    body: String
    postedAt: DateTime
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: ID!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: ID!): Post! @requireAuth
  }
`
