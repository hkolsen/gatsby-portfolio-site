import React, { createContext, useContext, useMemo } from 'react';
import {
  createGraphQLRequester,
  GraphQLRequester,
} from '@bumped-inc/graphql-requester';

// const graphQLEndpoint = process.env.GRAPHQL_URI;
const graphQLEndpoint = 'https://api.bumped.com/graphql';
if (typeof graphQLEndpoint !== 'string' || !graphQLEndpoint) {
  throw new TypeError(`Expected GRAPHQL_URI to be a string`);
}

const Context = createContext<GraphQLRequester | undefined>(undefined);

export const GraphQLRequesterProvider: React.FC = ({ children }) => {
  const graphQLRequester = useMemo(
    () =>
      createGraphQLRequester({
        url: graphQLEndpoint,
        fetch:
          (typeof window !== 'undefined' && window.fetch) ||
          (() => {
            throw new TypeError('Attempted to fetch without `fetch` available');
          }),
      }),
    [],
  );
  return (
    <Context.Provider value={graphQLRequester}>{children}</Context.Provider>
  );
};

export function useGraphQLRequester() {
  const graphQLRequester = useContext(Context);
  if (!graphQLRequester) {
    throw new TypeError(`Expected to be within GraphQLRequesterProvider`);
  }
  return graphQLRequester;
}
