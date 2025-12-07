import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (book) => {
    setCartItems((currentCart) => {
      const existing = currentCart.find(item => Number(item.id) === Number(book.id));
      if (existing) {
        return currentCart.map(item =>
          Number(item.id) === Number(book.id)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...currentCart, { ...book, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((currentCart) =>
      currentCart.map(item =>
        Number(item.id) === Number(id) ? { ...item, quantity: newQuantity } : item
      )
    );
  };

   const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
