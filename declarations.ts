export interface Product {
  qty: number;
  userId: number;
  title: string;
  description: string;
  id: number;
  price: number;
  image: string;
  thumbnail: string;
}

export interface TContext {
  products: Array<Product> | null;
  loading: boolean;
  error: string;
}
