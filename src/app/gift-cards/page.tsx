import { Metadata } from 'next'
import { Header, Footer, GiftCards } from '@/components'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Подарочные карты - Ceramica',
  description: 'Подарочные карты на керамическую посуду ручной работы Ceramica',
}

export default function GiftCardsPage() {
  return (
    <main className={styles.main}>
      <Header />
      <GiftCards />
      <Footer />
    </main>
  )
} 