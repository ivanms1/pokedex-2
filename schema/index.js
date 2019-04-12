const { gql } = require('apollo-server');

const typeDefs = gql`
  type Pokemon {
    id: Int!
    name: String!
    sprites: Sprite!
    types: [TypeList]!
  }

  type TypeList {
    type: Type
    slot: Int
  }

  type Type {
    name: String!
    url: String!
  }

  type Sprite {
    front_default: String!
  }

  type Entries {
    flavor_text_entries: [Entry]!
  }

  type Entry {
    flavor_text: String!
    language: language!
  }

  type language {
    name: String!
  }

  type Query{
    pokemon(name: String!):Pokemon,
    entries(name: String!):Entries
  }
`

module.exports = typeDefs;