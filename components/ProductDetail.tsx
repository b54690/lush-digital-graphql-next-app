import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { apolloQueries, queryVariables } from "../lib/apolloQueries";
import ProductDetailStyles from "./ProductDetailStyles";
import { Product } from "../interfaces";

export const ProductDetail: React.FC<{}> = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(apolloQueries.PRODUCT_QUERY, {
    variables: { id, channel: queryVariables.PRODUCTS_QUERY.channel },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { product } = data;

  const productDescription = JSON.parse(
    product.description
  ) as Product["node"]["description"];

  return (
    <ProductDetailStyles>
      <h1>{product.name}</h1>
      {productDescription &&
        productDescription.blocks?.map((b, i) => (
          <p
            key={i}
            className="block"
            dangerouslySetInnerHTML={{ __html: b.data.text }}
          />
        ))}
    </ProductDetailStyles>
  );
};

export default ProductDetail;
