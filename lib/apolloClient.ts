import { ApolloClient, InMemoryCache } from "@apollo/client";

const getApolloClient = () => {
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });
};

export default getApolloClient;
