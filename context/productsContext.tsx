import React, { useState } from "react";
import { Product } from "../interfaces";
import { apolloQueries, queryVariables } from "../lib/apolloQueries";
import getApolloClient from "../lib/apolloClient";

interface IProductsContext {
  products: Product[];
  fetchMoreProducts: (newQuery: boolean) => Promise<void>;
  isFetching: boolean;
}

export const ProductsContext = React.createContext<IProductsContext>({
  products: [],
  fetchMoreProducts: () => Promise.resolve(),
  isFetching: false,
});

const client = getApolloClient();

export const ProductsProvider: React.FC<
  React.PropsWithChildren<{
    products: Product[];
    endCursor: Product["node"]["id"];
    fetchedProductIds: Product["node"]["id"][];
    categoryId?: Product["node"]["category"]["id"];
  }>
> = ({
  products: initialProducts,
  endCursor: initialEndCursor,
  children,
  categoryId,
}) => {
  const [products, setProducts] = useState(initialProducts);
  // endCursor is used determine which product id the next fetch should start from.
  // The cursor gets updated after each fetch for more products
  const [endCursor, setEndCursor] = useState(initialEndCursor);
  const [fetchedProductIds, setFetchedProductIds] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  // Fetches more products (if an existing category query exists), or
  // creates a new fetch when a new product query is created in the productFilter
  const fetchMoreProducts = async (newQuery: boolean) => {
    const { loading, error, data } = await client.query({
      query: apolloQueries.PRODUCTS_QUERY,
      variables: {
        channel: queryVariables.PRODUCTS_QUERY.channel,
        first: queryVariables.PRODUCTS_QUERY.firstId,
        after: !newQuery ? endCursor : null,
        categories: categoryId ? [categoryId] : [],
      },
    });

    if (loading) {
      setIsFetching(true);
    }

    if (!loading && !error) {
      // Ensure existing product Ids aren't refetched
      const newProducts = data.products.edges.filter(
        ({ node }) => !fetchedProductIds.includes(node.id)
      );
      setProducts(
        !newQuery
          ? (prevProducts) => [...prevProducts, ...newProducts]
          : () => [...newProducts]
      );
      setEndCursor(!newQuery ? data.products.pageInfo.endCursor : null);
      setFetchedProductIds(
        !newQuery
          ? (prevIds) => [...prevIds, ...newProducts.map(({ node }) => node.id)]
          : () => [...newProducts.map(({ node }) => node.id)]
      );
      setIsFetching(false);
    }
  };

  return (
    <ProductsContext.Provider
      value={{ products, fetchMoreProducts, isFetching }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
