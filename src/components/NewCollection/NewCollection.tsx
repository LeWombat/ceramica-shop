import Image from 'next/image'
import Link from 'next/link'
import styles from './NewCollection.module.scss'

const collectionImages = [
  { id: 1, image: '/images/collection-1.jpg' },
  { id: 2, image: '/images/collection-2.jpg' },
  { id: 3, image: '/images/collection-3.jpg' },
  { id: 4, image: '/images/collection-4.jpg' },
]

export const NewCollection = () => {
  return (
    <section className={styles.collection}>
      <div className="container">
        <h2 className="section-title">НОВАЯ КОЛЛЕКЦИЯ</h2>
        <div className={styles.grid}>
          {collectionImages.map((item) => (
            <div key={item.id} className={styles.item}>
              <Image
                src={item.image}
                alt={`Collection item ${item.id}`}
                width={400}
                height={300}
                className={styles.image}
              />
            </div>
          ))}
        </div>
        <div className={styles.action}>
          <Link href="/collection" className="button">
            Подробнее &gt;&gt;
          </Link>
        </div>
      </div>
    </section>
  )
} 