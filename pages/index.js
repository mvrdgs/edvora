import Filter from '../components/Filter'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Filter />
      </div>
    </div>
  )
}
