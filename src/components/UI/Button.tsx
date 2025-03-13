"use client"

import { ReactNode } from 'react'
import styles from './Button.module.scss'

export interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'dark'
  fullWidth?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  fullWidth = false,
  className = '',
  type = 'button',
  disabled = false
}: ButtonProps) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : '',
    disabled ? styles.disabled : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
} 