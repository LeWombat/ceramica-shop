"use client"

import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import styles from './GiftCards.module.scss'

export interface GiftCardProps {
  id: number
  title: string
  image: string
  price: number
  type: 'plastic' | 'electronic'
}

export const GiftCard = ({ id, title, image, price, type }: GiftCardProps) => {
  const { addToCart } = useCart()
  
  const handleAddToCart = () => {
    // Создаем объект продукта из подарочной карты
    const giftCardProduct = {
      id,
      name: title,
      price,
      image,
      category: 'Подарочные карты',
      color: type === 'plastic' ? 'Пластиковая' : 'Электронная',
      description: `Подарочная карта ${type === 'plastic' ? 'пластиковая' : 'электронная'}`
    }
    
    addToCart(giftCardProduct)
  }
  
  return (
    <div className={styles.giftCard}>
      <div className={styles.giftCardImageContainer}>
        <Image 
          src={image} 
          alt={title} 
          width={400}
          height={250}
          className={styles.giftCardImage}
        />
        <div className={styles.giftCardLogo}>CERAMICA</div>
      </div>
      <h3 className={styles.giftCardTitle}>{title}</h3>
      <div className={styles.giftCardPrice}>
        <input 
          type="number" 
          className={styles.priceInput} 
          placeholder="Введите сумму" 
          min={1000} 
          max={50000} 
          defaultValue={price}
        />
        <span className={styles.currency}>руб.</span>
      </div>
      <button 
        className={styles.addToCartButton}
        onClick={handleAddToCart}
      >
        Добавить в корзину
      </button>
    </div>
  )
} 