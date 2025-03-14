import { Header, Hero, About, Products, NewCollection, Footer } from '@/components'
import styles from './page.module.scss'

// Главная страница сайта керамики
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <About />
      <Products />
      <NewCollection />
      <Footer />
    </main>
  )
} 