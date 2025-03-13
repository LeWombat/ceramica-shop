'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Breadcrumbs.module.scss'

interface BreadcrumbItem {
  label: string
  path: string
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const pathname = usePathname()
  
  // Если не переданы элементы, создаем их автоматически из пути
  if (!items) {
    items = []
    
    // Добавляем домашнюю страницу
    items.push({
      label: 'Главная',
      path: '/'
    })
    
    // Разбиваем путь на сегменты и создаем breadcrumbs
    const pathSegments = pathname.split('/').filter(p => p)
    
    if (pathSegments.length > 0) {
      let path = ''
      
      pathSegments.forEach((segment, index) => {
        path += `/${segment}`
        
        // Преобразуем сегмент в читаемую метку
        let label = segment
          .replace(/-/g, ' ')
          .replace(/\b\w/g, char => char.toUpperCase())
        
        // Добавляем специальные правила для конкретных путей
        switch (segment) {
          case 'catalog':
            label = 'Каталог'
            break
          case 'cart':
            label = 'Корзина'
            break
          case 'checkout':
            label = 'Оформление заказа'
            break
          case 'order-success':
            label = 'Заказ оформлен'
            break
          case 'order-processing':
            label = 'Заказ в обработке'
            break
          case 'gift-cards':
            label = 'Подарочные карты'
            break
        }
        
        items!.push({
          label,
          path
        })
      })
    }
  }
  
  return (
    <nav className={styles.breadcrumbs} aria-label="Хлебные крошки">
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            {index === items!.length - 1 ? (
              <span className={styles.current}>{item.label}</span>
            ) : (
              <>
                <Link href={item.path} className={styles.link}>
                  {item.label}
                </Link>
                <span className={styles.separator}>/</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
} 