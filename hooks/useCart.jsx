// src/hooks/useCart.js
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export function useCart() {
  const { currentUser } = useAuth();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser) {
      const fetchCart = async () => {
        const cartRef = doc(db, "carts", currentUser.uid);
        const cartSnap = await getDoc(cartRef);
        
        if (cartSnap.exists()) {
          setCart(cartSnap.data().items || []);
        }
        setLoading(false);
      };
      
      fetchCart();
    } else {
      setLoading(false);
    }
  }, [currentUser]);

  const updateCart = async (newCart) => {
    if (!currentUser) return;
    
    const cartRef = doc(db, "carts", currentUser.uid);
    await setDoc(cartRef, { items: newCart }, { merge: true });
    setCart(newCart);
  };

  const addToCart = async (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    let newCart;
    
    if (existingItem) {
      newCart = cart.map(item =>
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }
    
    await updateCart(newCart);
  };

  const removeFromCart = async (productId) => {
    const newCart = cart.filter(item => item.id !== productId);
    await updateCart(newCart);
  };

  const updateQuantity = async (productId, quantity) => {
    if (quantity <= 0) {
      await removeFromCart(productId);
      return;
    }
    
    const newCart = cart.map(item =>
      item.id === productId 
        ? { ...item, quantity }
        : item
    );
    
    await updateCart(newCart);
  };

  return {
    cart,
    loading,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
    cartTotal: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  };
}