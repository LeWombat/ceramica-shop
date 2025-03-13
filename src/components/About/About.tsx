import Image from 'next/image'
import { Button } from '@/components/UI'
import Link from 'next/link'
import styles from './About.module.scss'

export function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle}>О НАС</h2>
            <p className={styles.aboutDescription}>
              Ceramica - это магазин керамики ручной работы, созданной с любовью к деталям и
              уважением к традициям. Мы работаем с 2010 года и за это время создали тысячи
              уникальных изделий, которые сейчас украшают дома по всей России.
            </p>
            <p className={styles.aboutDescription}>
              Наши изделия создаются вручную опытными мастерами, которые вкладывают душу
              в каждый предмет. Мы используем только высококачественную глину и натуральные
              красители, безопасные для здоровья и окружающей среды.
            </p>
            <Link href="/about">
              <Button variant="secondary">Узнать больше</Button>
            </Link>
          </div>
          <div className={styles.aboutImagesWrapper}>
            <div className={styles.aboutImages}>
              <Image
                src="/images/about/about-1.jpg"
                alt="Керамист за работой"
                width={300}
                height={400}
                className={styles.mainImage}
              />
              <div className={styles.smallImagesContainer}>
                <Image
                  src="/images/about/about-2.jpg"
                  alt="Процесс создания керамики"
                  width={200}
                  height={200}
                  className={styles.smallImage}
                />
                <Image
                  src="/images/about/about-3.jpg"
                  alt="Готовые изделия"
                  width={200}
                  height={200}
                  className={styles.smallImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 