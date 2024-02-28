import { Product } from "../util/interface";

const ProductItem = ({ product }: { product: Product; }) => {
  return (
    <div className="productItem" style={{ backgroundImage: `url("src/assets/nectars/${product.name}.webp")` }}>
      {/* <div className="productImage"><img src={`src/assets/nectars/${product.name}.webp`} alt={product.name} /></div> */}
      <div className="productInfo">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <p>In Stock: {product.in_stock ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
};

export default ProductItem;