export const schema = gql`
  type Post {
    id: Int!
    title: String!
    anchor: String
    body: String!
    postedAt: DateTime!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
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
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
