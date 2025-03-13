'use client'

import { useState, useEffect } from 'react'
import styles from './Alert.module.scss'

type AlertType = 'success' | 'error' | 'info' | 'warning'

interface AlertProps {
  type?: AlertType
  message: string
  autoClose?: boolean
  duration?: number
  onClose?: () => void
}

export function Alert({
  type = 'info',
  message,
  autoClose = true,
  duration = 3000,
  onClose
}: AlertProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        handleClose()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [autoClose, duration])

  const handleClose = () => {
    setIsVisible(false)
    if (onClose) {
      onClose()
    }
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      <div className={styles.content}>
        <span className={styles.message}>{message}</span>
      </div>
      <button
        className={styles.closeButton}
        onClick={handleClose}
        aria-label="Закрыть"
      >
        ×
      </button>
    </div>
  )
} 