import { Product } from "../util/interface";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${backendUrl}/products/`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};
