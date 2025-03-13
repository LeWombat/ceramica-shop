"use client"

import { useState, useEffect } from 'react'
import { Category, Color, PriceRange, Product } from '@/types'
import { categories, colors, priceRanges } from '@/data/products'
import { FilterSection } from './FilterSection'
import { ProductList } from './ProductList'
import styles from './Catalog.module.scss'

interface CatalogProps {
  products: Product[]
}

export const Catalog = ({ products }: CatalogProps) => {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([])
  const [selectedColors, setSelectedColors] = useState<Color[]>([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<PriceRange[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)

  useEffect(() => {
    let filtered = [...products]

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) => 
        selectedCategories.includes(product.category as Category)
      )
    }

    if (selectedColors.length > 0) {
      filtered = filtered.filter((product) => 
        product.color && selectedColors.includes(product.color as Color)
      )
    }

    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter((product) => {
        return selectedPriceRanges.some((range) => {
          if (range === 'До 2000 руб.') return product.price <= 2000
          if (range === 'До 4000 руб.') return product.price <= 4000 && product.price > 2000
          if (range === 'До 6000 руб.') return product.price <= 6000 && product.price > 4000
          if (range === 'От 6000 руб.') return product.price >= 6000
          return false
        })
      })
    }

    setFilteredProducts(filtered)
  }, [products, selectedCategories, selectedColors, selectedPriceRanges])

  const handleCategoryChange = (category: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  const handleColorChange = (color: Color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((c) => c !== color)
        : [...prev, color]
    )
  }

  const handlePriceRangeChange = (priceRange: PriceRange) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(priceRange)
        ? prev.filter((p) => p !== priceRange)
        : [...prev, priceRange]
    )
  }

  return (
    <div className={styles.catalogContainer}>
      <h2 className={styles.catalogTitle}>КАТАЛОГ</h2>
      
      <div className={styles.catalogContent}>
        <FilterSection
          categories={categories}
          colors={colors}
          priceRanges={priceRanges}
          selectedCategories={selectedCategories}
          selectedColors={selectedColors}
          selectedPriceRanges={selectedPriceRanges}
          onCategoryChange={handleCategoryChange}
          onColorChange={handleColorChange}
          onPriceRangeChange={handlePriceRangeChange}
        />
        
        <ProductList products={filteredProducts} />
      </div>
    </div>
  )
} 