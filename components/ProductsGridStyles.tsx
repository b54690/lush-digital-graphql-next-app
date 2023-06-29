import styled from "styled-components";

const ProductGridStyles = styled.div`
  padding: 10rem 8rem;

  @media screen and (max-width: 768px) {
    padding: 7rem 2rem;
  }

  .product-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    @media screen and (max-width: 480px) {
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
  }
`;

export default ProductGridStyles;
