import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import gql from "graphql-tag";
import styled from 'styled-components';
import { withApollo } from 'react-apollo';

import Result from './Components/Result';

const GET_POKEMON = gql`
  query ($name: String!) {
    pokemon(name: $name) {
      name
      sprites{
        front_default
      }
      types{
        type{
          name
        }
      } 
    }
  }
`

const GET_ENTRY = gql`
  query($name: String!) {
    entries(name: $name) {
      flavor_text_entries {
        flavor_text
        language {
          name
        }
      }
    }
  }
`

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  min-width: 400px;

`

function App ({ client }) {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [entry, setEntry] = useState(null)

  const searchPokemon = (e) => {
    e.preventDefault();
    client.query({ query: GET_POKEMON, variables: { name: search }})
    .then(data => setPokemon(data.data.pokemon));

    client.query({ query: GET_ENTRY, variables: { name: search }})
    .then(data => setEntry(data.data.entries.flavor_text_entries.filter(entry => entry.language.name === "en")))

  }
    return (
      <StyledApp>
        <h1>Kanto Kids Pokedex</h1>
        <StyledForm onSubmit={searchPokemon}>
          <TextField
            id="poke-search"
            label="Search your pokemon"
            margin="normal"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </StyledForm>
        {pokemon && entry && <Result pokemon={pokemon} entry={entry}/>}
      </StyledApp>
    );
}

export default withApollo(App);
