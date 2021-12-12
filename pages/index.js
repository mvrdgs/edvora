import { useEffect, useState } from 'react';
import Filter from '../components/Filter'
import ProductList from '../components/ProductList'
import styles from '../styles/Home.module.css'
import axios from 'axios'

const filterUniqueItems = ((item, index, self) => self.indexOf(item) === index);

export default function Home({ data }) {
  const [filteredData, setFilteredData] = useState(data);
  const productTypes = {};
  filteredData.forEach((product) => {
    if (!productTypes[product.product_name]) productTypes[product.product_name] = [];
    productTypes[product.product_name].push(product);
  });
  const productTypeKeys = Object.keys(productTypes);

  const [filterOptions, setFilterOptions] = useState({ products: [], states: [], cities: [] });
  
  useEffect(() => {
    const products = data.map((product) => product.product_name)
      .filter(filterUniqueItems);
    const states = data.map((product) => product.address.state)
      .filter(filterUniqueItems);
    const cities = data.map((product) => product.address.city)
      .filter(filterUniqueItems);
    setFilterOptions({ products, states, cities })
  }, [data])

  return (
    <div className={styles.container}>
      <Filter filterOptions={filterOptions} data={data} setFilteredData={setFilteredData} />
      <main className={styles.main}>
        <header>
          <h1 className={styles.title}>Edvora</h1>
          <h2 className={styles.subtitle}>Products</h2>
        </header>
        {
          productTypeKeys.map((productType) => (
            <ProductList
              key={ productType }
              products={ productTypes[productType] }
            />
          ))
        }
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await axios.get('http://assessment-edvora.herokuapp.com/');
  return {
    props: {
      data,
    },
  };
}
