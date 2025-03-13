"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Product } from '@/types'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/UI'
import styles from './ProductDetail.module.scss'

interface ProductDetailProps {
  product: Product
  relatedProducts: Product[]
}

export const ProductDetail = ({ product, relatedProducts }: ProductDetailProps) => {
  const { addToCart } = useCart()
  const [mainImage, setMainImage] = useState(product.image)
  
  const handleAddToCart = () => {
    addToCart(product)
  }
  
  // Массив изображений для галереи
  // Обычно это должно приходить с бэкенда в составе product
  // Здесь используем дополнительные изображения из Figma
  const additionalImages = [
    product.image, 
    '/images/products/product-image-2.jpg',
    '/images/products/product-image-3.jpg',
    '/images/products/product-image-4.jpg'
  ]
  
  return (
    <div className={styles.productDetail}>
      <div className={styles.productContent}>
        <div className={styles.productGallery}>
          <div className={styles.mainImage}>
            <Image
              src={mainImage}
              alt={product.name}
              width={600}
              height={600}
              className={styles.productImage}
            />
          </div>
          <div className={styles.thumbnails}>
            {additionalImages.map((image, index) => (
              <div 
                key={index}
                className={`${styles.thumbnail} ${mainImage === image ? styles.active : ''}`}
                onClick={() => setMainImage(image)}
              >
                <Image
                  src={image}
                  alt={`${product.name} - изображение ${index + 1}`}
                  width={150}
                  height={150}
                  className={styles.thumbnailImage}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.productInfo}>
          <h1 className={styles.productName}>{product.name}</h1>
          <p className={styles.productPrice}>{product.price} руб.</p>
          
          <div className={styles.divider}></div>
          
          <div className={styles.productDescription}>
            <h3>Описание</h3>
            <p>
              Эта изысканная керамическая {product.category.toLowerCase()} привлекает внимание своей уникальной формой 
              и смелым дизайном. Изготовленная из натуральной керамики, она выполнена в стиле 
              минимализма с элементами этнического декора.
            </p>
          </div>
          
          <div className={styles.productFeatures}>
            <p><strong>Материал:</strong> керамика</p>
            <p><strong>Цвет:</strong> {product.color}</p>
            <p><strong>Поверхность:</strong> матовая, текстурная</p>
            <p><strong>Гарантия:</strong> 1 год</p>
          </div>
          
          <Button 
            variant="primary"
            onClick={handleAddToCart}
            fullWidth
          >
            Добавить в корзину
          </Button>
        </div>
      </div>
      
      {relatedProducts.length > 0 && (
        <div className={styles.relatedProducts}>
          <h2 className={styles.relatedTitle}>ВАМ МОЖЕТ ПОНРАВИТЬСЯ</h2>
          <div className={styles.relatedList}>
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className={styles.relatedItem}>
                <div className={styles.relatedImageContainer}>
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    width={250}
                    height={300}
                    className={styles.relatedImage}
                  />
                </div>
                <h3 className={styles.relatedName}>{relatedProduct.name}</h3>
                <p className={styles.relatedPrice}>{relatedProduct.price} руб.</p>
                <Button 
                  variant="primary"
                  onClick={() => {
                    addToCart(relatedProduct)
                  }}
                >
                  Добавить в корзину
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 