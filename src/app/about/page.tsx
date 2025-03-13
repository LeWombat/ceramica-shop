import { Metadata } from 'next'
import Image from 'next/image'
import { Header, Footer, Breadcrumbs } from '@/components'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'О нас - Ceramica',
  description: 'Узнайте больше о магазине керамики ручной работы Ceramica, нашей истории, ценностях и подходе к созданию уникальных изделий',
}

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Breadcrumbs />
        
        <section className={styles.aboutSection}>
          <h1 className={styles.pageTitle}>О НАС</h1>
          
          <div className={styles.aboutIntro}>
            <div className={styles.introText}>
              <p className={styles.introParagraph}>
                Ceramica - это бренд, родившийся из любви к керамике и стремления создавать
                красивые и функциональные предметы, которые делают нашу повседневную жизнь
                более осмысленной и эстетичной.
              </p>
              <p className={styles.introParagraph}>
                С 2010 года мы создаем керамические изделия ручной работы, которые находят
                свое место в домах по всей России, привнося в них тепло и индивидуальность.
              </p>
            </div>
            <div className={styles.introImage}>
              <Image 
                src="/images/about/workshop.jpg" 
                alt="Наша мастерская" 
                width={600} 
                height={400}
                className={styles.image}
              />
            </div>
          </div>
          
          <div className={styles.timeline}>
            <h2 className={styles.sectionTitle}>НАША ИСТОРИЯ</h2>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2010</div>
              <div className={styles.timelineContent}>
                <h3>Начало пути</h3>
                <p>
                  Мария и Алексей Петровы открыли небольшую керамическую мастерскую в Москве.
                  Первые изделия создавались на маленьком гончарном круге в домашней студии.
                </p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2013</div>
              <div className={styles.timelineContent}>
                <h3>Первый магазин</h3>
                <p>
                  После трех лет работы на заказ, мы открыли первый магазин-студию в центре Москвы.
                  Это позволило нам не только продавать изделия, но и проводить мастер-классы.
                </p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2016</div>
              <div className={styles.timelineContent}>
                <h3>Расширение команды</h3>
                <p>
                  Наша команда выросла до 10 мастеров. Мы начали создавать более сложные и разнообразные
                  изделия, экспериментировать с формами и глазурями.
                </p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2019</div>
              <div className={styles.timelineContent}>
                <h3>Онлайн-присутствие</h3>
                <p>
                  Запуск нашего интернет-магазина позволил нам делиться нашими изделиями
                  со всей Россией. Мы начали отправлять керамику в самые отдаленные уголки страны.
                </p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2023</div>
              <div className={styles.timelineContent}>
                <h3>Сегодня</h3>
                <p>
                  Сегодня Ceramica - это бренд с уникальным стилем и философией, команда профессионалов
                  и тысячи довольных клиентов по всей стране.
                </p>
              </div>
            </div>
          </div>
          
          <div className={styles.values}>
            <h2 className={styles.sectionTitle}>НАШИ ЦЕННОСТИ</h2>
            
            <div className={styles.valuesList}>
              <div className={styles.valueItem}>
                <h3>Качество</h3>
                <p>
                  Мы используем только высококачественную глину и натуральные материалы.
                  Каждое изделие проходит тщательную проверку перед тем, как покинуть мастерскую.
                </p>
              </div>
              
              <div className={styles.valueItem}>
                <h3>Устойчивость</h3>
                <p>
                  Мы стремимся к экологической устойчивости во всех аспектах нашего производства,
                  от выбора материалов до упаковки и доставки.
                </p>
              </div>
              
              <div className={styles.valueItem}>
                <h3>Индивидуальность</h3>
                <p>
                  Каждое наше изделие уникально, так как создается вручную. Мы ценим индивидуальные
                  особенности и характер, которые придают нашей керамике особую ценность.
                </p>
              </div>
              
              <div className={styles.valueItem}>
                <h3>Ремесленное мастерство</h3>
                <p>
                  Мы гордимся тем, что продолжаем традиции ремесленного мастерства, передавая
                  знания и навыки от мастера к ученику.
                </p>
              </div>
            </div>
          </div>
          
          <div className={styles.team}>
            <h2 className={styles.sectionTitle}>НАША КОМАНДА</h2>
            
            <div className={styles.teamList}>
              <div className={styles.teamMember}>
                <div className={styles.memberPhoto}>
                  <Image 
                    src="/images/team/maria.jpg" 
                    alt="Мария Петрова" 
                    width={300} 
                    height={300}
                    className={styles.memberImage}
                  />
                </div>
                <h3 className={styles.memberName}>Мария Петрова</h3>
                <p className={styles.memberRole}>Основатель, Главный дизайнер</p>
                <p className={styles.memberBio}>
                  Мария с детства увлекалась керамикой и закончила Московскую художественно-промышленную
                  академию им. С.Г. Строганова. Ее уникальный подход к дизайну определяет стиль Ceramica.
                </p>
              </div>
              
              <div className={styles.teamMember}>
                <div className={styles.memberPhoto}>
                  <Image 
                    src="/images/team/alexey.jpg" 
                    alt="Алексей Петров" 
                    width={300} 
                    height={300}
                    className={styles.memberImage}
                  />
                </div>
                <h3 className={styles.memberName}>Алексей Петров</h3>
                <p className={styles.memberRole}>Сооснователь, Технический директор</p>
                <p className={styles.memberBio}>
                  Алексей отвечает за техническую сторону производства. Его инженерное образование
                  помогает оптимизировать процессы и внедрять инновации в создание керамики.
                </p>
              </div>
              
              <div className={styles.teamMember}>
                <div className={styles.memberPhoto}>
                  <Image 
                    src="/images/team/elena.jpg" 
                    alt="Елена Смирнова" 
                    width={300} 
                    height={300}
                    className={styles.memberImage}
                  />
                </div>
                <h3 className={styles.memberName}>Елена Смирнова</h3>
                <p className={styles.memberRole}>Главный керамист</p>
                <p className={styles.memberBio}>
                  Елена присоединилась к команде в 2014 году и быстро стала незаменимым
                  членом нашей семьи. Ее опыт работы с различными техниками обжига придает
                  нашим изделиям неповторимый характер.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
} 