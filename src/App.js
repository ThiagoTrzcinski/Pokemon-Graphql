import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './graphql';
import PokemonList from './PokemonList';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <PokemonList />
      </div>
    </ApolloProvider>
  );
}

export default App;
