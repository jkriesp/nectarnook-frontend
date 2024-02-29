import { Product } from "../util/interface";
import BuyButton from "./BuyButton";

const ProductItem = ({ product }: { product: Product; }) => {
  return (
    <div className="productItem" style={{ backgroundImage: `url("src/assets/nectars/${product.name}.webp")` }}>
      {/* <div className="productImage"><img src={`src/assets/nectars/${product.name}.webp`} alt={product.name} /></div> */}
      <div className="productInfo">
        <h2>{product.name}</h2>
        <p className="productDescription">{product.description}</p>
        <p><b>Price: {product.price}</b></p>
        <p>In Stock: {product.in_stock ? 'Yes' : 'No'}</p>
        <BuyButton product={product} />
      </div>
    </div>
  );
};

export default ProductItem;