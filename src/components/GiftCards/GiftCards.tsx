import { GiftCard, GiftCardProps } from './GiftCard'
import styles from './GiftCards.module.scss'

// Данные о подарочных картах
const giftCardsData: GiftCardProps[] = [
  {
    id: 1001,
    title: 'Пластиковая карта на любую сумму',
    image: '/images/gift-cards/gift-card-1.jpg',
    price: 3000,
    type: 'plastic'
  },
  {
    id: 1002,
    title: 'Электронная карта на любую сумму',
    image: '/images/gift-cards/gift-card-2.jpg',
    price: 2000,
    type: 'electronic'
  }
]

export const GiftCards = () => {
  return (
    <div className={styles.giftCardsContainer}>
      <h1 className={styles.giftCardsTitle}>ПОДАРОЧНЫЕ КАРТЫ</h1>
      
      <div className={styles.giftCardsDescription}>
        <p>
          Подарите своим близким возможность выбрать идеальный подарок самостоятельно. 
          Наши подарочные карты доступны в двух форматах - пластиковая карта, 
          которую мы доставим по указанному адресу, и электронная карта, 
          которая будет отправлена на указанный email.
        </p>
      </div>
      
      <div className={styles.giftCardsList}>
        {giftCardsData.map((card) => (
          <GiftCard
            key={card.id}
            id={card.id}
            title={card.title}
            image={card.image}
            price={card.price}
            type={card.type}
          />
        ))}
      </div>
      
      <div className={styles.giftCardsInfo}>
        <h2>Условия использования подарочных карт:</h2>
        <ul>
          <li>Срок действия подарочной карты - 1 год с момента покупки</li>
          <li>Подарочную карту можно использовать для частичной или полной оплаты товаров</li>
          <li>Подарочную карту нельзя обменять на наличные деньги</li>
          <li>При утере пластиковой карты восстановление возможно только при наличии чека</li>
          <li>Подарочная карта не распространяется на товары со скидкой</li>
        </ul>
      </div>
    </div>
  )
} 