'use client'

import { Header, Footer, Breadcrumbs } from '@/components'
import { Accordion } from '@/components/UI'
import styles from './page.module.scss'

export default function FAQPage() {
  // Данные для аккордеона
  const faqItems = [
    {
      title: "Как ухаживать за керамическими изделиями?",
      content: (
        <div>
          <p>
            Для правильного ухода за керамическими изделиями рекомендуем:
          </p>
          <ul>
            <li>Мыть изделия вручную мягкой губкой с неабразивными моющими средствами</li>
            <li>Не подвергать резким перепадам температур</li>
            <li>Не использовать изделия в микроволновой печи, если это не указано в описании</li>
            <li>Хранить керамику в сухом месте, избегая ударов и падений</li>
            <li>Для удаления сильных загрязнений можно использовать раствор соды (1 ст. ложка на 1 литр воды)</li>
          </ul>
        </div>
      )
    },
    {
      title: "Как происходит доставка заказа?",
      content: (
        <div>
          <p>
            Мы осуществляем доставку по всей России. Сроки и способы доставки:
          </p>
          <ul>
            <li>Москва и Санкт-Петербург: курьерская доставка 1-3 дня</li>
            <li>Другие города России: доставка Почтой России или СДЭК, 3-14 дней, в зависимости от удаленности</li>
            <li>Самовывоз из нашего магазина в Москве доступен в день заказа или на следующий день</li>
          </ul>
          <p>
            Каждое изделие бережно упаковывается в защитную пленку и картонную коробку с наполнителем, чтобы обеспечить сохранность при транспортировке.
          </p>
        </div>
      )
    },
    {
      title: "Какие способы оплаты вы принимаете?",
      content: (
        <div>
          <p>
            Мы предлагаем несколько способов оплаты:
          </p>
          <ul>
            <li>Банковской картой онлайн (Visa, MasterCard, МИР)</li>
            <li>Наличными при получении (для курьерской доставки или самовывоза)</li>
            <li>Банковским переводом (для юридических лиц)</li>
            <li>Электронными кошельками (ЮMoney, QIWI)</li>
          </ul>
          <p>
            При оплате онлайн вы получаете электронный чек на указанный email.
          </p>
        </div>
      )
    },
    {
      title: "Возможен ли возврат или обмен изделия?",
      content: (
        <div>
          <p>
            Да, мы принимаем возврат товара надлежащего качества в течение 14 дней с момента получения, если:
          </p>
          <ul>
            <li>Изделие не было в использовании</li>
            <li>Сохранены товарный вид, потребительские свойства, пломбы, фабричные ярлыки</li>
            <li>Сохранена оригинальная упаковка</li>
          </ul>
          <p>
            В случае обнаружения брака или дефекта изделия, мы производим обмен или возврат товара в течение 30 дней.
          </p>
          <p>
            Для оформления возврата, пожалуйста, свяжитесь с нами по телефону или email, указанным в разделе Контакты.
          </p>
        </div>
      )
    },
    {
      title: "Делаете ли вы индивидуальные заказы?",
      content: (
        <div>
          <p>
            Да, мы принимаем индивидуальные заказы на изготовление керамических изделий по вашему дизайну или с учетом ваших пожеланий.
          </p>
          <p>
            Для обсуждения индивидуального заказа, пожалуйста:
          </p>
          <ul>
            <li>Отправьте нам эскиз или описание желаемого изделия на почту</li>
            <li>Укажите примерные размеры и количество изделий</li>
            <li>Отметьте предпочитаемые цвета и фактуру</li>
          </ul>
          <p>
            Сроки изготовления индивидуальных заказов составляют от 10 до 30 дней, в зависимости от сложности и объема работы.
          </p>
        </div>
      )
    },
    {
      title: "Что делать, если изделие разбилось при доставке?",
      content: (
        <div>
          <p>
            Если вы обнаружили, что изделие повреждено при доставке, пожалуйста, следуйте этим инструкциям:
          </p>
          <ol>
            <li>Сделайте фотографии поврежденного изделия и упаковки</li>
            <li>Не выбрасывайте упаковку и изделие</li>
            <li>Свяжитесь с нами в течение 24 часов с момента получения</li>
            <li>Опишите характер повреждений в письме или по телефону</li>
          </ol>
          <p>
            Мы оперативно заменим поврежденное изделие или вернем деньги. Замена производится за наш счет, включая доставку.
          </p>
        </div>
      )
    }
  ];

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Breadcrumbs />
        <section className={styles.faqSection}>
          <h1 className={styles.pageTitle}>Часто задаваемые вопросы</h1>
          
          <Accordion items={faqItems} allowMultiple={false} />
          
          <div className={styles.additionalQuestions}>
            <h2>Не нашли ответ на свой вопрос?</h2>
            <p>
              Свяжитесь с нами по телефону <a href="tel:+74951234567">+7 (495) 123-45-67</a> или напишите на почту <a href="mailto:info@ceramica.ru">info@ceramica.ru</a>. 
              Наши специалисты с радостью ответят на любые вопросы.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
} 