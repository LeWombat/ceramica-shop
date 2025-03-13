import { Metadata } from 'next'
import { Header, Footer } from '@/components'
import { Catalog } from '@/components/Catalog'
import { products } from '@/data/products'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Каталог - Ceramica',
  description: 'Каталог керамической посуды ручной работы Ceramica',
}

export default function CatalogPage() {
  return (
    <main className={styles.main}>
      <Header />
      <Catalog products={products} />
      <Footer />
    </main>
  )
} 