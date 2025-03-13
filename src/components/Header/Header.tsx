"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext' 
import styles from './Header.module.scss'

export const Header = () => {
  const { totalItems } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  // Определяем, является ли устройство мобильным
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    // Проверяем при загрузке
    checkIfMobile()
    
    // Проверяем при изменении размера окна
    window.addEventListener('resize', checkIfMobile)
    
    // Очищаем слушатель при размонтировании
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])
  
  // Закрываем меню при клике на ссылку
  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false)
    }
  }
  
  // Блокируем прокрутку страницы, когда меню открыто
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])
  
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link href="/" onClick={handleLinkClick}>
              <div className={styles.logoCircle}>
                <span>
                  CERA
                  <br />
                  MICA
                </span>
              </div>
            </Link>
          </div>
          
          {isMobile ? (
            <>
              <button 
                className={`${styles.burgerButton} ${isMenuOpen ? styles.open : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Меню"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              
              <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                <ul className={styles.mobileMenuList}>
                  <li><Link href="/catalog" onClick={handleLinkClick}>Товары</Link></li>
                  <li><Link href="/gift-cards" onClick={handleLinkClick}>Подарочные карты</Link></li>
                  <li><Link href="/delivery" onClick={handleLinkClick}>Доставка</Link></li>
                  <li><Link href="/contacts" onClick={handleLinkClick}>Контакты</Link></li>
                  <li>
                    <Link href="/cart" className={styles.cartLink} onClick={handleLinkClick}>
                      Корзина {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <ul className={styles.menu}>
              <li><Link href="/catalog">Товары</Link></li>
              <li><Link href="/gift-cards">Подарочные карты</Link></li>
              <li><Link href="/delivery">Доставка</Link></li>
              <li><Link href="/contacts">Контакты</Link></li>
              <li>
                <Link href="/cart" className={styles.cartLink}>
                  Корзина {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  )
} 