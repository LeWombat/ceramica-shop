import styles from './Hero.module.scss'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1>CERAMICA</h1>
          <p>посуда ручной работы</p>
        </div>
      </div>
    </section>
  )
} 