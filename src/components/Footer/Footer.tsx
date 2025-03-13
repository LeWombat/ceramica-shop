import Link from 'next/link'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.column}>
            <h3>Контакты</h3>
            <p>+7 (495) 123-45-67</p>
            <p>info@ceramica.ru</p>
            <p>г. Москва, ул. Пушкина, д. 10</p>
          </div>
          
          <div className={styles.column}>
            <h3>Навигация</h3>
            <ul>
              <li><Link href="/">Главная</Link></li>
              <li><Link href="/about">О нас</Link></li>
              <li><Link href="/catalog">Каталог</Link></li>
              <li><Link href="/contacts">Контакты</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h3>Покупателям</h3>
            <ul>
              <li><Link href="/delivery">Заказы и доставка</Link></li>
              <li><Link href="/return">Возврат товара</Link></li>
              <li><Link href="/gift-cards">Подарочные карты</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h3>Информация</h3>
            <ul>
              <li><Link href="/faq">Вопросы и ответы</Link></li>
              <li><Link href="/jobs">Вакансии</Link></li>
              <li><Link href="/terms">Условия использования</Link></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>© 2023 Ceramica. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
} 