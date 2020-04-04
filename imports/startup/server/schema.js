import { gql } from 'apollo-server-express'

const testSchema = gql`
type Query {
  hi: String
  resolutions: [Resolution]
}`

export default testSchema