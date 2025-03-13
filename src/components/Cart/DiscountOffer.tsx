"use client"

import { useState } from 'react'
import { Button } from '@/components/UI'
import styles from './Cart.module.scss'

interface DiscountOfferProps {
  minOrderAmount?: number
}

export const DiscountOffer = ({ minOrderAmount = 2000 }: DiscountOfferProps) => {
  const [showOffer, setShowOffer] = useState(true)
  
  if (!showOffer) return null
  
  return (
    <div className={styles.discountOfferContainer}>
      <div className={styles.discountOffer}>
        <button
          className={styles.closeButton}
          onClick={() => setShowOffer(false)}
          aria-label="Закрыть"
        >
          ✕
        </button>
        
        <h2 className={styles.discountTitle}>
          ПОЛУЧИТЕ СКИДКУ ПРИ ЗАКАЗЕ<br />
          ОТ {minOrderAmount} РУБЛЕЙ
        </h2>
        
        <Button
          variant="secondary"
          onClick={() => {
            alert('Скидка 10% применена к вашему заказу!');
            setShowOffer(false);
          }}
        >
          Получить &gt;&gt;
        </Button>
      </div>
    </div>
  )
} 