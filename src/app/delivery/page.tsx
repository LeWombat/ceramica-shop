import Image from 'next/image'
import { Header, Footer, Breadcrumbs } from '@/components'
import { Metadata } from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Доставка - Ceramica',
  description: 'Информация о способах и условиях доставки керамических изделий ручной работы от Ceramica',
  openGraph: {
    title: 'Доставка - Ceramica',
    description: 'Информация о способах и условиях доставки керамических изделий ручной работы от Ceramica',
    images: ['/images/delivery/delivery-hero-bg.jpg'],
  },
}

export default function DeliveryPage() {
  return (
    <main className={styles.main}>
      <Header />
      
      <div className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Доставка</h1>
          <p className={styles.subtitle}>Выберите удобный для вас способ получения заказа</p>
        </div>
      </div>

      <div className="container">
        <Breadcrumbs />
        
        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Способы доставки</h2>
            <div className={styles.deliveryMethods}>
              <div className={styles.method}>
                <div className={styles.methodIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 7H16V5C16 3.89543 15.1046 3 14 3H2C0.89543 3 0 3.89543 0 5V17C0 18.1046 0.89543 19 2 19H3C3 20.6569 4.34315 22 6 22C7.65685 22 9 20.6569 9 19H15C15 20.6569 16.3431 22 18 22C19.6569 22 21 20.6569 21 19H22C23.1046 19 24 18.1046 24 17V12C24 9.23858 21.7614 7 19 7ZM6 20.5C5.17157 20.5 4.5 19.8284 4.5 19C4.5 18.1716 5.17157 17.5 6 17.5C6.82843 17.5 7.5 18.1716 7.5 19C7.5 19.8284 6.82843 20.5 6 20.5ZM14 14H2V5H14V14ZM18 20.5C17.1716 20.5 16.5 19.8284 16.5 19C16.5 18.1716 17.1716 17.5 18 17.5C18.8284 17.5 19.5 18.1716 19.5 19C19.5 19.8284 18.8284 20.5 18 20.5ZM22 17H20.9C20.7 16.39 20.4 15.83 20 15.42V12H22V17Z" fill="#404040"/>
                  </svg>
                </div>
                <h3>Курьером</h3>
                <p>Доставка курьером осуществляется в течение 1-3 рабочих дней после оформления заказа. Вы можете выбрать удобное время доставки с 10:00 до 22:00.</p>
                <p className={styles.price}>Стоимость: от 300 рублей</p>
              </div>
              
              <div className={styles.method}>
                <div className={styles.methodIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#404040"/>
                  </svg>
                </div>
                <h3>Самовывоз</h3>
                <p>Вы можете забрать свой заказ самостоятельно из нашего магазина по адресу: ул. Керамическая, д. 15.</p>
                <p>Время работы: ежедневно с 10:00 до 20:00</p>
                <p className={styles.price}>Стоимость: бесплатно</p>
              </div>
              
              <div className={styles.method}>
                <div className={styles.methodIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#404040"/>
                  </svg>
                </div>
                <h3>Почта России</h3>
                <p>Доставка Почтой России осуществляется в течение 5-14 рабочих дней в зависимости от региона.</p>
                <p className={styles.price}>Стоимость: от 350 рублей</p>
              </div>
            </div>
          </section>
          
          <section className={styles.section}>
            <h2>Информация о доставке</h2>
            <div className={styles.infoCard}>
              <ul className={styles.infoList}>
                <li>Доставка осуществляется по всей России.</li>
                <li>Время доставки зависит от выбранного способа и региона.</li>
                <li>При получении заказа обязательно проверьте целостность упаковки и соответствие товара заказу.</li>
                <li>В случае обнаружения дефектов или несоответствий, сразу сообщите об этом курьеру или сотруднику в пункте выдачи.</li>
                <li>Стоимость доставки не включена в стоимость товара и оплачивается отдельно.</li>
              </ul>
            </div>
          </section>
          
          <section className={styles.section}>
            <h2>Сроки доставки</h2>
            <div className={styles.deliveryTimesWrapper}>
              <div className={styles.deliveryTimes}>
                <h3>Москва и область</h3>
                <div className={styles.timeItem}>
                  <div className={styles.days}>1-2</div>
                  <div>рабочих дня</div>
                </div>
              </div>
              
              <div className={styles.deliveryTimes}>
                <h3>Санкт-Петербург и область</h3>
                <div className={styles.timeItem}>
                  <div className={styles.days}>2-3</div>
                  <div>рабочих дня</div>
                </div>
              </div>
              
              <div className={styles.deliveryTimes}>
                <h3>Другие регионы России</h3>
                <div className={styles.timeItem}>
                  <div className={styles.days}>3-14</div>
                  <div>рабочих дней</div>
                </div>
              </div>
            </div>
            
            <div className={styles.note}>
              <p>В период пиковых нагрузок (праздники, распродажи) сроки доставки могут быть увеличены.</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Доставка хрупких изделий</h2>
            <p className={styles.sectionDescription}>Мы понимаем, что керамические изделия требуют особого обращения при доставке. Наши мастера упаковки обеспечивают безопасную транспортировку вашего заказа:</p>
            
            <div className={styles.packageInfo}>
              <div className={styles.packageItem}>
                <div className={styles.packageIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 6V17.5C16.5 19.71 14.71 21.5 12.5 21.5C10.29 21.5 8.5 19.71 8.5 17.5V5C8.5 3.62 9.62 2.5 11 2.5C12.38 2.5 13.5 3.62 13.5 5V15.5C13.5 16.05 13.05 16.5 12.5 16.5C11.95 16.5 11.5 16.05 11.5 15.5V6H10V15.5C10 16.88 11.12 18 12.5 18C13.88 18 15 16.88 15 15.5V5C15 2.79 13.21 1 11 1C8.79 1 7 2.79 7 5V17.5C7 20.54 9.46 23 12.5 23C15.54 23 18 20.54 18 17.5V6H16.5Z" fill="#404040"/>
                  </svg>
                </div>
                <p>Каждое изделие индивидуально оборачивается в пузырчатую пленку</p>
              </div>
              
              <div className={styles.packageItem}>
                <div className={styles.packageIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 3H6C4.3 3 3 4.3 3 6V18C3 19.7 4.3 21 6 21H18C19.7 21 21 19.7 21 18V6C21 4.3 19.7 3 18 3ZM19 18C19 18.6 18.6 19 18 19H6C5.4 19 5 18.6 5 18V6C5 5.4 5.4 5 6 5H18C18.6 5 19 5.4 19 6V18Z" fill="#404040"/>
                    <path d="M15 11H9V13H15V11Z" fill="#404040"/>
                  </svg>
                </div>
                <p>Используем прочные коробки с амортизирующими вставками</p>
              </div>
              
              <div className={styles.packageItem}>
                <div className={styles.packageIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.071 8C9.26403 8 7.00003 10.264 7.00003 13.07C7.00003 15.876 9.26403 18.14 12.071 18.14C14.878 18.14 17.142 15.876 17.142 13.07C17.142 10.264 14.878 8 12.071 8ZM12.071 16.283C10.287 16.283 8.85803 14.854 8.85803 13.07C8.85803 11.286 10.287 9.857 12.071 9.857C13.855 9.857 15.284 11.286 15.284 13.07C15.284 14.854 13.855 16.283 12.071 16.283Z" fill="#404040"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#404040"/>
                  </svg>
                </div>
                <p>Маркируем коробки специальными знаками "Хрупкое"</p>
              </div>
            </div>
          </section>
          
          <section className={styles.section}>
            <h2>Остались вопросы?</h2>
            <div className={styles.contactCard}>
              <p>Если у вас остались вопросы по доставке, свяжитесь с нами:</p>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#404040"/>
                  </svg>
                  <span>info@ceramica.ru</span>
                </div>
                <div className={styles.contactItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.3 14.9 16.2 14.9 16.1 14.9C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5ZM19 12H21C21 7 17 3 12 3V5C15.9 5 19 8.1 19 12ZM15 12H17C17 9.2 14.8 7 12 7V9C13.7 9 15 10.3 15 12Z" fill="#404040"/>
                  </svg>
                  <span>+7 (495) 123-45-67</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  )
} 