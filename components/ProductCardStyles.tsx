import styled from "styled-components";

const ProductCardStyles = styled.div`
  padding: 1rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  cursor: pointer;

  .product-image {
    padding: 0 2rem;
    margin: 0 auto;
    height: 25rem;
    width: 100%;
    object-fit: none;
  }

  .product-name {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export default ProductCardStyles;
