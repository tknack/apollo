import { ApolloServer, gql } from 'apollo-server-express'
// import { makeExecutableSchema } from "graphql-tools";
import { WebApp } from 'meteor/webapp'
import { getUser } from 'meteor/apollo'

import typeDefs from './schema'
import resolvers from './resolvers'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    user: await getUser(req.headers.authorization)
  })
})

// test request server
server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: '/graphql'
})

WebApp.connectHandlers.use('/graphql', (req, res) => {
  if (req.method === 'GET') {
    res.end()
  }
})

console.log('tknack © 2020')

// createApolloServer({})