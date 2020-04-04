import { ApolloServer } from "apollo-server-express";
// import { makeExecutableSchema } from "graphql-tools";
import { WebApp } from "meteor/webapp";
import { getUser } from "meteor/apollo";
import merge from "lodash/merge";

/**
 * Resolutions
 */
// schémas
import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";
// hi!
import testSchema from "./schema";
// resolvers
import resolutionsResolvers from "../../api/resolutions/resolvers";

// const testSchema = `
// type Query {
//   hi: String
// }`

// association des deux schémas
const typeDefs = [testSchema, ResolutionsSchema];

// hi
const testResolvers = {
  Query: {
    hi() {
      return "Hello Level Up";
    }
  }
};

// association des resolvers. Il peut en exister plusieurs
const resolvers = merge(testResolvers, resolutionsResolvers);

// console.log(resolvers)
// launch apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    user: await getUser(req.headers.authorization)
  })
});

// test request server
server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: "/graphql"
});

WebApp.connectHandlers.use("/graphql", (req, res) => {
  if (req.method === "GET") {
    res.end();
  }
});
