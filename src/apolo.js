// src/ApolloProvider.js
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.tanda.kg/graphql/', 
    headers: {
      Authorization: `Bearer YOUR_TOKEN` 
    }
  }),
  cache: new InMemoryCache()
});

const ApolloProviderComponent = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

export default ApolloProviderComponent;