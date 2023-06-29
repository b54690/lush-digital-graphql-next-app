import { ProductsContext } from "../context/productsContext";
import { ProductCard } from "./ProductCard";
import ProductGridStyles from "./ProductsGridStyles";
import ProductFilter from "./ProductFilter";
import React from "react";
import { useRouter } from "next/router";
import Button from "./Button";

const ProductsGrid: React.FC<{}> = () => {
  const router = useRouter();
  const { category } = router.query;

  const { products, fetchMoreProducts, isFetching } =
    React.useContext(ProductsContext);

  const handleLoadMoreProducts = async () => {
    await fetchMoreProducts(false);
  };

  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }

  // Fetch categorised products when the category gets updated
  React.useEffect(() => {
    fetchMoreProducts(true);
  }, [category]);

  return (
    <ProductGridStyles>
      <h1>Products</h1>
      <ProductFilter />
      <div className="product-grid">
        {products.map(({ node }) => (
          <ProductCard key={node.id} product={node} />
        ))}
      </div>
      <Button
        title="Load more"
        onClick={handleLoadMoreProducts}
        isFetching={isFetching}
      />
    </ProductGridStyles>
  );
};

export default ProductsGrid;
