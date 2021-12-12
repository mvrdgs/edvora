import React from 'react';
import styles from '../styles/Filter.module.css'

function Filter({ filterOptions }) {
  const { products, states, cities } = filterOptions;
    
  return (
    <aside className={styles.filters}>
      <h3 className={styles["filter-title"]}>Filters</h3>
      <div className={styles["filters-container"]}>
        <select
          className={styles["filter-select"]}
        >
          <option>Products</option>
          {
            products.map((product) => <option key={product} value={product}>{product}</option>)
          }
        </select>
        <select
          className={styles["filter-select"]}
        >
          <option>State</option>
          {
            states.map((state) => <option key={state} value={state}>{state}</option>)
          }
        </select>
        <select
          className={styles["filter-select"]}
        >
          <option>City</option>
          {
            cities.map((city) => <option key={city} value={city}>{city}</option>)
          }
        </select>
      </div>
    </aside>
  );
}

export default Filter;