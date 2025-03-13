"use client"

import { useCart } from '@/context/CartContext'
import { CartItem } from './CartItem'
import { DiscountOffer } from './DiscountOffer'
import { Button } from '@/components/UI'
import Link from 'next/link'
import styles from './Cart.module.scss'

export function Cart() {
  const { cartItems, totalPrice, totalItems } = useCart()

  if (totalItems === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Ваша корзина пуста</h2>
        <p>Добавьте товары в корзину, чтобы оформить заказ</p>
        <Link href="/catalog">
          <Button variant="primary">Перейти в каталог</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Корзина</h1>
      
      {totalPrice < 2000 && <DiscountOffer minOrderAmount={2000} />}
      
      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        
        <div className={styles.cartSummary}>
          <div className={styles.summaryItem}>
            <span>Товары ({totalItems}):</span>
            <span>{totalPrice.toLocaleString()} ₽</span>
          </div>
          
          <div className={styles.summaryTotal}>
            <span>Итого:</span>
            <span>{totalPrice.toLocaleString()} ₽</span>
          </div>
          
          <Link href="/checkout">
            <Button variant="primary" fullWidth>
              Оформить заказ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 