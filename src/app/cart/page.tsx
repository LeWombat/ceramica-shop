import { Metadata } from 'next'
import { Header, Footer } from '@/components'
import { Cart } from '@/components/Cart'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Корзина - Ceramica',
  description: 'Корзина товаров Ceramica - керамическая посуда ручной работы',
}

export default function CartPage() {
  return (
    <main className={styles.main}>
      <Header />
      <Cart />
      <Footer />
    </main>
  )
} 