import Link from 'next/link'
import { Header, Footer } from '@/components'
import styles from './not-found.module.scss'

export default function NotFound() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.notFound}>
        <h1>Товар не найден</h1>
        <p>К сожалению, запрашиваемый товар не существует или был удален.</p>
        <Link href="/catalog" className={styles.catalogLink}>
          Вернуться в каталог
        </Link>
      </div>
      <Footer />
    </main>
  )
} 