import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const isProductPresent = cartItems.find(item => item.id === productToAdd.id);

  if (isProductPresent) {
    return cartItems.map(item =>
      // prettier-ignore
      item.id === productToAdd.id 
        ? { ...item, quantity: item.quantity + 1 } 
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const getTotalItemsQuantity = cartItems => {
  return cartItems.reduce((acc, item) => acc + item.quantity, 0);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartCount: 0,
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(getTotalItemsQuantity(cartItems));

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
    setCartCount(getTotalItemsQuantity(cartItems));
  }, [cartItems]);

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
