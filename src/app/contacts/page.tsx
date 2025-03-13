import { Metadata } from 'next'
import { Header, Footer, Breadcrumbs } from '@/components'
import { Contacts } from '@/components/Contacts/Contacts'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Контакты - Ceramica',
  description: 'Свяжитесь с нами по любым вопросам. Контактная информация и форма обратной связи',
}

export default function ContactsPage() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Breadcrumbs />
        <Contacts />
      </div>
      <Footer />
    </main>
  )
} 