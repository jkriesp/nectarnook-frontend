import { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import { Product } from '../util/interface';
import ProductItem from './ProductItem';


const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <div className='productList'>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
