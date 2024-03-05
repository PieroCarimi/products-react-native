import React, { createContext, useEffect, useState } from 'react';
import { Product, TContext } from './declarations';

export const AppContext: any = createContext<TContext>({
  products: null,
  loading: false,
  error: '',
});

interface Props {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<Props>|any = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://mockend.up.railway.app/api/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
        loading,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
