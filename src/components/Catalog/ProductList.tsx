"use client"

import { useState } from 'react'
import { Product } from '@/types'
import { ProductCard } from './ProductCard'
import styles from './Catalog.module.scss'

interface ProductListProps {
  products: Product[]
  itemsPerPage?: number
}

export const ProductList = ({ products, itemsPerPage = 8 }: ProductListProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  
  const totalPages = Math.ceil(products.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={styles.productListContainer}>
      <div className={styles.productList}>
        {currentItems.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
          />
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className={styles.pagination}>
          {currentPage > 1 && (
            <button 
              className={styles.paginationArrow}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              &lt;
            </button>
          )}
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`${styles.paginationButton} ${
                page === currentPage ? styles.active : ''
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          
          {currentPage < totalPages && (
            <button 
              className={styles.paginationArrow}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              &gt;
            </button>
          )}
        </div>
      )}
      
      {products.length > itemsPerPage && (
        <button className={styles.showMoreButton}>
          Показать еще
        </button>
      )}
    </div>
  )
} 