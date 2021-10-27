export const schema = gql`
  type Post {
    id: String!
    title: String!
    anchor: String
    body: String!
    postedAt: DateTime!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: String!): Post @requireAuth
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
    updatePost(id: String!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: String!): Post! @requireAuth
  }
`
