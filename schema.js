import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Query {
    users: [User]
  }
`

export const resolvers = {
    Query: {
        users() {
            return "This will soon return users!"
        }
    }
}