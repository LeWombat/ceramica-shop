'use client'

import styles from './Pagination.module.scss'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // Создаем массив страниц для отображения
  const getPageNumbers = () => {
    const pageNumbers = []
    const maxPagesToShow = 5 // Максимальное количество страниц для отображения

    if (totalPages <= maxPagesToShow) {
      // Если общее количество страниц меньше или равно maxPagesToShow, показываем все страницы
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      // Иначе показываем текущую страницу и несколько соседних
      let startPage = Math.max(1, currentPage - 2)
      let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages)

      // Если мы достигли конца, сдвигаем начальную страницу назад
      if (endPage === totalPages) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1)
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
      }

      // Добавляем многоточие в начале, если начальная страница больше 1
      if (startPage > 1) {
        pageNumbers.unshift(-1) // -1 будет отображаться как "..."
        pageNumbers.unshift(1) // Всегда показываем первую страницу
      }

      // Добавляем многоточие в конце, если конечная страница меньше общего количества страниц
      if (endPage < totalPages) {
        pageNumbers.push(-2) // -2 будет отображаться как "..."
        pageNumbers.push(totalPages) // Всегда показываем последнюю страницу
      }
    }

    return pageNumbers
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.pageButton} ${styles.navButton}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Предыдущая страница"
      >
        &laquo;
      </button>
      
      {pageNumbers.map((pageNumber, index) => (
        <button
          key={index}
          className={`${styles.pageButton} ${pageNumber === currentPage ? styles.active : ''} ${pageNumber < 0 ? styles.dots : ''}`}
          onClick={() => pageNumber > 0 && onPageChange(pageNumber)}
          disabled={pageNumber < 0}
        >
          {pageNumber < 0 ? '...' : pageNumber}
        </button>
      ))}
      
      <button
        className={`${styles.pageButton} ${styles.navButton}`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Следующая страница"
      >
        &raquo;
      </button>
    </div>
  )
} 