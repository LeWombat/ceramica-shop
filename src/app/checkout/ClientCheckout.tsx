"use client"

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Spinner } from '@/components/UI'
import styles from './page.module.scss'

// Динамический импорт с ленивой загрузкой компонента Checkout
const Checkout = dynamic(() => import('@/components/Checkout/Checkout').then(mod => ({ default: mod.Checkout })), {
  loading: () => (
    <div className={styles.loading}>
      <Spinner size="large" color="primary" />
      <p>Загрузка формы оформления заказа...</p>
    </div>
  ),
  ssr: false // Отключаем серверный рендеринг для этого компонента
})

export default function ClientCheckout() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading ? (
        <div className={styles.loading}>
          <Spinner size="large" color="primary" />
          <p>Обработка заказа...</p>
        </div>
      ) : (
        <Checkout onSubmitStart={() => setIsLoading(true)} />
      )}
    </>
  )
} 