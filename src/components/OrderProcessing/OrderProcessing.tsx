"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/UI'
import styles from './OrderProcessing.module.scss'

interface OrderProcessingProps {
  orderNumber?: string
}

export function OrderProcessing({ orderNumber = '12345' }: OrderProcessingProps) {
  const [showNotification, setShowNotification] = useState(true)
  const router = useRouter()

  if (!showNotification) {
    return null
  }

  const handleClose = () => {
    setShowNotification(false)
    router.push('/')
  }

  const handleContinueShopping = () => {
    router.push('/catalog')
  }

  const handleBackToHome = () => {
    router.push('/')
  }

  return (
    <div className={styles.orderProcessingContainer}>
      <div className={styles.orderProcessing}>
        <button className={styles.closeButton} onClick={handleClose}>
          ×
        </button>
        
        <h2 className={styles.orderProcessingTitle}>
          Благодарим за заказ!
        </h2>
        
        <div className={styles.orderDetails}>
          <p className={styles.orderNumberText}>Номер заказа: <strong>{orderNumber}</strong></p>
          <p>Ваш заказ находится в обработке.</p>
          <p>Мы свяжемся с вами в ближайшее время для подтверждения деталей.</p>
        </div>
        
        <div className={styles.buttonContainer}>
          <Button 
            variant="primary" 
            onClick={handleContinueShopping}
          >
            Продолжить покупки
          </Button>
          
          <Button 
            variant="secondary" 
            onClick={handleBackToHome}
          >
            Вернуться на главную
          </Button>
        </div>
        
        <p className={styles.thanksText}>Спасибо, что выбрали Ceramica!</p>
      </div>
    </div>
  )
} 