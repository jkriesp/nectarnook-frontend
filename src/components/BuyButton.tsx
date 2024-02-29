import { Product } from "../util/interface";

const BuyButton = ({ product }: { product: Product; }) => (
  <button className="buyNectarButton" onClick={() => handleBuyProduct(product)}>Buy</button>
);
export default BuyButton;

function handleBuyProduct(product: Product): void {
  throw new Error("Function not implemented.");
}
