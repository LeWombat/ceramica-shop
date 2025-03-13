"use client"

import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import styles from './Cart.module.scss'

interface CartItemProps {
  item: {
    id: number
    product: {
      id: number
      name: string
      price: number
      image: string
    }
    quantity: number
  }
}

export function CartItem({ item }: CartItemProps) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart()
  const { product, quantity } = item
  const totalPrice = product.price * quantity

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImage}>
        <Image
          src={product.image}
          alt={product.name}
          width={100}
          height={100}
          className={styles.productImage}
        />
      </div>
      
      <div className={styles.cartItemDetails}>
        <h3 className={styles.cartItemName}>{product.name}</h3>
        <div className={styles.cartItemPrice}>{product.price.toLocaleString()} ₽</div>
      </div>
      
      <div className={styles.cartItemActions}>
        <div className={styles.quantityControl}>
          <button 
            className={styles.quantityButton}
            onClick={() => decreaseQuantity(product.id)}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className={styles.quantity}>{quantity}</span>
          <button 
            className={styles.quantityButton}
            onClick={() => increaseQuantity(product.id)}
          >
            +
          </button>
        </div>
        
        <div className={styles.cartItemTotal}>
          {totalPrice.toLocaleString()} ₽
        </div>
        
        <button 
          className={styles.removeButton}
          onClick={() => removeFromCart(product.id)}
          aria-label="Удалить товар"
        >
          ✕
        </button>
      </div>
    </div>
  )
} 