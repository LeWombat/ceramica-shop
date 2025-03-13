"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/UI'
import styles from './OrderSuccess.module.scss'

interface OrderSuccessProps {
  orderNumber?: string
}

export function OrderSuccess({ orderNumber = Math.floor(10000 + Math.random() * 90000).toString() }: OrderSuccessProps) {
  const [showNotification, setShowNotification] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Имитация получения данных о заказе
    const timer = setTimeout(() => {
      // здесь можно было бы загрузить информацию о заказе с сервера
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <motion.div 
      className={styles.orderSuccessContainer} 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className={styles.orderSuccess}
        variants={itemVariants}
      >
        <button className={styles.closeButton} onClick={handleClose}>
          ×
        </button>
        
        <motion.div 
          className={styles.iconContainer}
          variants={itemVariants}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.5
            }}
          >
            <div className={styles.checkmarkCircle}>
              <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className={styles.checkmarkCirclePath} cx="26" cy="26" r="25" fill="none"/>
                <path className={styles.checkmarkPath} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.h2 
          className={styles.orderSuccessTitle}
          variants={itemVariants}
        >
          Заказ успешно оформлен!
        </motion.h2>
        
        <motion.div 
          className={styles.orderDetails}
          variants={itemVariants}
        >
          <p className={styles.orderNumberText}>Номер заказа: <strong>{orderNumber}</strong></p>
          <p>Мы отправили детали заказа на вашу электронную почту.</p>
          <p>Наш менеджер свяжется с вами в ближайшее время для подтверждения заказа.</p>
        </motion.div>
        
        <motion.div 
          className={styles.buttonContainer}
          variants={itemVariants}
        >
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
        </motion.div>
        
        <motion.div 
          className={styles.confetti}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <span 
              key={i} 
              className={styles.confettiPiece} 
              style={{ 
                '--angle': `${Math.random() * 360}deg`,
                '--distance': `${Math.random() * 80 + 50}px`,
                '--size': `${Math.random() * 10 + 5}px`,
                '--delay': `${Math.random() * 1}s`
              } as React.CSSProperties}
            />
          ))}
        </motion.div>
        
        <motion.p 
          className={styles.thanksText}
          variants={itemVariants}
        >
          Спасибо, что выбрали Ceramica!
        </motion.p>
      </motion.div>
    </motion.div>
  )
} 