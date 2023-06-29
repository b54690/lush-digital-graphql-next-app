import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GlobalStyle from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </ApolloProvider>
    </>
  );
}
export default MyApp;
