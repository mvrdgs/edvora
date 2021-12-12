import Filter from '../components/Filter'
import ProductList from '../components/ProductList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Filter />
      <main className={styles.main}>
        <header>
          <h1 className={styles.title}>Edvora</h1>
          <h2 className={styles.subtitle}>Products</h2>
        </header>
        <ProductList />
      </main>
    </div>
  )
}
