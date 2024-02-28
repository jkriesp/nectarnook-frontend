import { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import { Product } from '../util/interface';

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <p>In Stock: {product.in_stock ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
