// File: src/contexts/CartContext.jsx (cart management)
import React, { createContext, useContext, useState, useEffect } from 'react';
import { cartAPI } from '../api/cart';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      loadCart();
    } else {
      // Load cart from localStorage if user is not logged in
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
      setLoading(false);
    }
  }, [user]);

  const loadCart = async () => {
    try {
      const cartData = await cartAPI.getCart();
      setCart(cartData.items);
      setLoading(false);
    } catch (error) {
      console.error('Failed to load cart:', error);
      setLoading(false);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    try {
      if (user) {
        await cartAPI.addToCart(productId, quantity);
        await loadCart(); // Reload cart from server
      } else {
        // For guest users, store in localStorage
        const updatedCart = [...cart];
        const existingItem = updatedCart.find(item => item.product._id === productId);
        
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          // In a real app, we would need to store product details too
          updatedCart.push({ product: { _id: productId }, quantity });
        }
        
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
    } catch (error) {
      console.error('Failed to add to cart:', error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      if (user) {
        await cartAPI.removeFromCart(productId);
        await loadCart();
      } else {
        const updatedCart = cart.filter(item => item.product._id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
    } catch (error) {
      console.error('Failed to remove from cart:', error);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      if (user) {
        await cartAPI.updateQuantity(productId, quantity);
        await loadCart();
      } else {
        const updatedCart = cart.map(item => 
          item.product._id === productId ? { ...item, quantity } : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
    } catch (error) {
      console.error('Failed to update quantity:', error);
    }
  };

  const clearCart = async () => {
    try {
      if (user) {
        await cartAPI.clearCart();
        await loadCart();
      } else {
        setCart([]);
        localStorage.removeItem('cart');
      }
    } catch (error) {
      console.error('Failed to clear cart:', error);
    }
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    loading
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}