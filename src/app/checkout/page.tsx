"use client"

import { Header, Footer } from '@/components'
import styles from './page.module.scss'
import ClientCheckout from './ClientCheckout'

export default function CheckoutPage() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <ClientCheckout />
      </div>
      <Footer />
    </main>
  )
} 