import { Product } from "../util/interface";

const ProductItem = ({ product }: { product: Product; }) => {
  return (
    <div className="productItem">
      <div className="productImage"><img src={`src/assets/nectars/${product.name}.webp`} alt={product.name} /></div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <p>In Stock: {product.in_stock ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default ProductItem;