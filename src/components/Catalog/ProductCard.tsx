"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types'
import { useCart } from '@/context/CartContext'
import styles from './Catalog.module.scss'

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault() // Предотвращаем переход по ссылке
    e.stopPropagation() // Предотвращаем всплытие события
    addToCart(product)
  }

  return (
    <Link href={`/catalog/${product.id}`} className={styles.productCard}>
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={product.name}
          width={250}
          height={300}
          className={styles.productImage}
        />
      </div>
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productPrice}>{product.price} руб.</p>
      <button 
        className={styles.addToCartButton}
        onClick={handleAddToCart}
      >
        Добавить в корзину
      </button>
    </Link>
  )
} 