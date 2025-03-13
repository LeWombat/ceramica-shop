'use client'

import { InputHTMLAttributes } from 'react'
import styles from './InputField.module.scss'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
  error?: string
  helperText?: string
  fullWidth?: boolean
}

export function InputField({
  label,
  id,
  error,
  helperText,
  fullWidth = false,
  className = '',
  ...rest
}: InputFieldProps) {
  return (
    <div className={`${styles.formGroup} ${fullWidth ? styles.fullWidth : ''} ${className}`}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        {...rest}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
      {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
    </div>
  )
} 