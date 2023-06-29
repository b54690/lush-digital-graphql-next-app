import { gql } from "@apollo/client";

export const queryVariables = {
  PRODUCTS_QUERY: {
    channel: "uk",
    firstId: 8,
  },
};

export const apolloQueries = {
  PRODUCTS_QUERY: gql`
    query GetProducts(
      $channel: String!
      $first: Int!
      $after: String
      $categories: [ID!]
    ) {
      products(
        channel: $channel
        first: $first
        after: $after
        filter: { categories: $categories }
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            id
            name
            description
            thumbnail {
              url
            }
            category {
              name
              id
            }
          }
        }
      }
    }
  `,
  PRODUCT_QUERY: gql`
    query GetProduct($id: ID!, $channel: String!) {
      product(id: $id, channel: $channel) {
        id
        name
        description
      }
    }
  `,
};
