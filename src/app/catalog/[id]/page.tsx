import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header, Footer, ProductDetail } from '@/components'
import { products } from '@/data/products' 
import styles from './page.module.scss'

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products.find(p => p.id === parseInt(params.id))
  
  if (!product) {
    return {
      title: 'Товар не найден - Ceramica',
      description: 'Запрашиваемый товар не найден',
    }
  }
  
  return {
    title: `${product.name} - Ceramica`,
    description: `${product.name} - керамическая посуда ручной работы`,
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = parseInt(params.id)
  const product = products.find(p => p.id === productId)
  
  if (!product) {
    notFound()
  }
  
  // Получаем похожие товары (той же категории, но не текущий товар)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4) // Ограничиваем до 4 товаров
  
  return (
    <main className={styles.main}>
      <Header />
      <ProductDetail product={product} relatedProducts={relatedProducts} />
      <Footer />
    </main>
  )
} 