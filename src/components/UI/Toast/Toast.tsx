"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Toast.module.scss'

export interface ToastProps {
  message: string
  type?: 'success' | 'error' | 'info'
  duration?: number
  onClose?: () => void
  productImage?: string
}

export function Toast({ 
  message, 
  type = 'success', 
  duration = 3000, 
  onClose,
  productImage
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      if (onClose) {
        setTimeout(onClose, 300) // Даем время для анимации исчезновения
      }
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const handleClose = () => {
    setIsVisible(false)
    if (onClose) {
      setTimeout(onClose, 300)
    }
  }

  const toastVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      x: '50%',
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      x: '0%',
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  }

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { 
        delay: 0.2,
        type: 'spring',
        stiffness: 500,
        damping: 15
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 0, rotate: -15 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        delay: 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 15
      }
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className={`${styles.toast} ${styles[type]}`}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={toastVariants}
        >
          <div className={styles.content}>
            {productImage && (
              <motion.div 
                className={styles.imageContainer}
                variants={imageVariants}
              >
                <img src={productImage} alt="Товар" className={styles.productImage} />
              </motion.div>
            )}
            <div className={styles.messageContainer}>
              <motion.div 
                className={styles.icon}
                variants={iconVariants}
              >
                {type === 'success' && (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
                  </svg>
                )}
                {type === 'error' && (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                  </svg>
                )}
                {type === 'info' && (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="currentColor"/>
                  </svg>
                )}
              </motion.div>
              <p className={styles.message}>{message}</p>
            </div>
          </div>
          <button className={styles.closeButton} onClick={handleClose}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 