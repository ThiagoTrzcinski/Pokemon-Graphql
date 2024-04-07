import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_POKEMONS = gql`
  query {
    pokemons(first: 20) {
      id
      name
      image
    }
  }
`;

const PokemonList = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Pokémons</h2>
      <ul>
        {data.pokemons.map(pokemon => (
          <li key={pokemon.id}>
            <img src={pokemon.image} alt={pokemon.name} />
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
