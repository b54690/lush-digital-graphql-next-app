import { Product } from "../interfaces";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import getApolloClient from "../lib/apolloClient";
import { apolloQueries, queryVariables } from "../lib/apolloQueries";
import { ProductsProvider } from "../context/productsContext";
import { useRouter } from "next/router";
import ProductsGrid from "../components/ProductsGrid";

const client = getApolloClient();

export async function getServerSideProps() {
  const { loading, error, data } = await client.query({
    query: apolloQueries.PRODUCTS_QUERY,
    variables: {
      channel: queryVariables.PRODUCTS_QUERY.channel,
      first: queryVariables.PRODUCTS_QUERY.firstId,
    },
  });

  let products: Product[] = [];
  let fetchedProductIds: Product["node"]["id"][] = [];
  let endCursor: string = null;

  if (!loading && !error) {
    products = data.products.edges;
    fetchedProductIds = data.products.edges.map(({ node }) => node.id);
    endCursor = data.products.pageInfo.endCursor;
  }

  return {
    props: {
      products,
      fetchedProductIds,
      endCursor,
    },
  };
}

const HomePage: React.FC<{
  products: Product[];
  fetchedProductIds: Product["node"]["id"][];
  endCursor: string;
}> = ({ products, fetchedProductIds, endCursor }) => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <ApolloProvider client={client}>
      <ProductsProvider
        products={products}
        fetchedProductIds={fetchedProductIds}
        endCursor={endCursor}
        categoryId={category as string}
      >
        <ProductsGrid />
      </ProductsProvider>
    </ApolloProvider>
  );
};

export default HomePage;
