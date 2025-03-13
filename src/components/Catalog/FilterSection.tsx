import { Category, Color, PriceRange } from '@/types'
import styles from './Catalog.module.scss'

interface FilterProps {
  title: string
  options: string[]
  selectedOptions: string[]
  onChange: (option: string) => void
}

const FilterOptions = ({ title, options, selectedOptions, onChange }: FilterProps) => {
  return (
    <div className={styles.filterGroup}>
      <div className={styles.filterTitle}>
        <h3>{title}</h3>
      </div>
      <div className={styles.filterOptions}>
        {options.map((option) => (
          <div
            key={option}
            className={styles.filterOption}
            onClick={() => onChange(option)}
          >
            <div
              className={`${styles.checkbox} ${
                selectedOptions.includes(option) ? styles.checked : ''
              }`}
            />
            <span>{option}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

interface FilterSectionProps {
  categories: string[]
  colors: string[]
  priceRanges: string[]
  selectedCategories: Category[]
  selectedColors: Color[]
  selectedPriceRanges: PriceRange[]
  onCategoryChange: (category: Category) => void
  onColorChange: (color: Color) => void
  onPriceRangeChange: (priceRange: PriceRange) => void
}

export const FilterSection = ({
  categories,
  colors,
  priceRanges,
  selectedCategories,
  selectedColors,
  selectedPriceRanges,
  onCategoryChange,
  onColorChange,
  onPriceRangeChange
}: FilterSectionProps) => {
  return (
    <aside className={styles.filterSection}>
      <FilterOptions
        title="Категория"
        options={categories}
        selectedOptions={selectedCategories}
        onChange={(option) => onCategoryChange(option as Category)}
      />
      <FilterOptions
        title="Цвет"
        options={colors}
        selectedOptions={selectedColors}
        onChange={(option) => onColorChange(option as Color)}
      />
      <FilterOptions
        title="Цена"
        options={priceRanges}
        selectedOptions={selectedPriceRanges}
        onChange={(option) => onPriceRangeChange(option as PriceRange)}
      />
    </aside>
  )
} 