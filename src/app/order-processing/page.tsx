"use client"

import dynamic from 'next/dynamic'
import { Header, Footer } from '@/components'
import { Spinner } from '@/components/UI'
import styles from './page.module.scss'

// Динамический импорт с ленивой загрузкой компонента OrderProcessing
const OrderProcessing = dynamic(() => import('@/components/OrderProcessing/OrderProcessing').then(mod => ({ default: mod.OrderProcessing })), {
  loading: () => (
    <div className={styles.loading}>
      <Spinner size="large" color="primary" />
      <p>Загрузка информации о заказе...</p>
    </div>
  ),
  ssr: false // Отключаем серверный рендеринг для этого компонента
})

export default function OrderProcessingPage() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <OrderProcessing />
      </div>
      <Footer />
    </main>
  )
} 