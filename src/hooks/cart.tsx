import React, { createContext, useCallback, useContext } from 'react';

// interface CartProps {
//   products: {
//     product_id: number;
//     quantity: number;
//     value: number;
//   }[];
// }

interface CartContextData {
  addCart(): void;
  removeCart(): void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {
  const addCart = useCallback(() => {
    const data = null;
    console.log(data);
  }, []);

  const removeCart = useCallback(() => {
    const data = null;
    console.log(data);
  }, []);

  return (
    <CartContext.Provider value={{ addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};

function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart does not have a CartProvider within');
  }

  return context;
}

export { CartProvider, useCart };
