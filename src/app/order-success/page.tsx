"use client"

import dynamic from 'next/dynamic'
import { Header, Footer } from '@/components'
import { Spinner } from '@/components/UI'
import styles from './page.module.scss'

// Динамический импорт с ленивой загрузкой компонента OrderSuccess
const OrderSuccess = dynamic(() => import('@/components/OrderSuccess/OrderSuccess').then(mod => ({ default: mod.OrderSuccess })), {
  loading: () => (
    <div className={styles.loading}>
      <Spinner size="large" color="primary" />
      <p>Загрузка информации о заказе...</p>
    </div>
  ),
  ssr: false // Отключаем серверный рендеринг для этого компонента
})

export default function OrderSuccessPage() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <OrderSuccess />
      </div>
      <Footer />
    </main>
  )
} 