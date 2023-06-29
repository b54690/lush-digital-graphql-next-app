import Link from "next/link";
import { Product } from "../interfaces";
import ProductCardStyles from "./ProductCardStyles";

export const ProductCard: React.FC<{ product: Product["node"] }> = ({
  product,
}) => {
  return (
    <ProductCardStyles>
      <Link
        className="product-link"
        href={`/products/${product.id}`}
        target="_blank"
      >
        <img
          className="product-image"
          src={product.thumbnail?.url}
          alt={product.name}
        />
        <h3 className="product-name">{product.name}</h3>
      </Link>
    </ProductCardStyles>
  );
};
