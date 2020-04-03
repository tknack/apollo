import { gql } from 'apollo-server-express'
/*
const typeDefs = gql`
type Rocket {
  id: ID!
  name: String
  type: String
}

type User {
  id: ID!
  email: String!
  trips: [Launch]!
}

type Mission {
  name: String
  missionPatch(size: PatchSize): String
}

enum PatchSize {
  SMALL
  LARGE
}

type Launch {
  id: ID!
  site: String
  mission: Mission
  rocket: Rocket
  isBooked: Boolean!
}

type Query {
  launches: [Launch]!
  launch(id: ID!): Launch
  me: User
}
`
*/

const typeDefs = gql`
type Query {
  hi: String
}`

export default typeDefs