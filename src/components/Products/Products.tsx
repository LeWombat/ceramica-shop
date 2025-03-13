import Image from 'next/image'
import Link from 'next/link'
import styles from './Products.module.scss'

const products = [
  { id: 1, name: 'Кружки', image: '/images/product-1.jpg' },
  { id: 2, name: 'Чашки', image: '/images/product-2.jpg' },
  { id: 3, name: 'Тарелки', image: '/images/product-3.jpg' },
  { id: 4, name: 'Блюдца', image: '/images/product-4.jpg' },
  { id: 5, name: 'Вазы', image: '/images/product-5.jpg' },
]

export const Products = () => {
  return (
    <section className={styles.products}>
      <div className="container">
        <h2 className="section-title">НАЙДИТЕ ВАШЕ ИДЕАЛЬНОЕ ИЗДЕЛИЕ</h2>
        <div className={styles.grid}>
          {products.slice(0, 3).map((product) => (
            <Link href={`/catalog?category=${product.name}`} key={product.id} className={styles.item}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.image}
              />
              <h3>{product.name}</h3>
            </Link>
          ))}
        </div>
        
        <div className={styles.grid}>
          {products.slice(3, 5).map((product) => (
            <Link href={`/catalog?category=${product.name}`} key={product.id} className={styles.item}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.image}
              />
              <h3>{product.name}</h3>
            </Link>
          ))}
        </div>
        
        <div className={styles.action}>
          <Link href="/catalog" className="button">
            Перейти в каталог &gt;&gt;
          </Link>
        </div>
      </div>
    </section>
  )
} 