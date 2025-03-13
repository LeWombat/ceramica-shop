'use client'

import styles from './Spinner.module.scss'

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary' | 'white'
  className?: string
}

export function Spinner({ size = 'medium', color = 'primary', className = '' }: SpinnerProps) {
  return (
    <div 
      className={`${styles.spinner} ${styles[size]} ${styles[color]} ${className}`}
      role="status"
      aria-label="Загрузка"
    >
      <div className={styles.dot1}></div>
      <div className={styles.dot2}></div>
    </div>
  )
} 