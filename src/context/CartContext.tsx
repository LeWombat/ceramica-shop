"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useToast } from '@/components/UI/Toast'

export interface Product {
  id: number
  name: string
  price: number
  image: string
  description?: string
  category?: string
}

export interface CartItem {
  id: number
  product: Product
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: number) => void
  increaseQuantity: (productId: number) => void
  decreaseQuantity: (productId: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [totalItems, setTotalItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const { showToast } = useToast()

  // Загрузка корзины из localStorage при инициализации
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        setCartItems(parsedCart)
      } catch (error) {
        console.error('Ошибка при загрузке корзины из localStorage:', error)
      }
    }
  }, [])

  // Сохранение корзины в localStorage при изменении
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems))
    }
    
    // Обновление общего количества товаров и общей стоимости
    const items = cartItems.reduce((total, item) => total + item.quantity, 0)
    const price = cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0)
    
    setTotalItems(items)
    setTotalPrice(price)
  }, [cartItems])

  const addToCart = (product: Product, quantity = 1) => {
    let isNewItem = false;
    
    setCartItems(prevItems => {
      // Проверяем, есть ли уже такой товар в корзине
      const existingItemIndex = prevItems.findIndex(item => item.product.id === product.id)
      
      if (existingItemIndex !== -1) {
        // Если товар уже есть, увеличиваем его количество
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += quantity
        return updatedItems
      } else {
        // Если товара нет, добавляем новый элемент
        isNewItem = true;
        return [...prevItems, { id: product.id, product, quantity }]
      }
    })
    
    // Показываем уведомление о добавлении товара
    const message = isNewItem 
      ? `${product.name} добавлен в корзину` 
      : `${product.name} (${quantity} шт.) добавлен в корзину`;
      
    showToast({
      message,
      type: 'success',
      productImage: product.image,
      duration: 3000
    })
  }

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId))
  }

  const increaseQuantity = (productId: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    )
  }

  const decreaseQuantity = (productId: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.product.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem('cart')
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalItems,
    totalPrice
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
} 