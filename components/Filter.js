import React, { useEffect, useState } from 'react';
import styles from '../styles/Filter.module.css'

function Filter({ filterOptions, data, setFilteredData }) {
  const { products, states, cities } = filterOptions;
  const [filters, setFilters] = useState({ product: '', state: '', city: '' });

  useEffect(() => {
    const filteredData = data
    .filter((item) => {
        const { product, state, city } = filters;
        if (product !== '' && item.product_name !== product) return false; 
        if (state !== '' && item.address.state !== state) return false; 
        if (city !== '' && item.address.city !== city) return false; 
        return true;
      })
    
    setFilteredData(filteredData);
  }, [filters, data]);

  const handleFilter = ({ target }) => {
    const { name, value } = target;
    setFilters({ ...filters, [name]: value })
  };
    
  return (
    <aside className={styles.filters}>
      <h3 className={styles["filter-title"]}>Filters</h3>
      <div className={styles["filters-container"]}>
        <select
          className={styles["filter-select"]}
          name="product"
          value={filters.product}
          onChange={ handleFilter }
        >
          <option value=''>Products</option>
          {
            products.map((product) => <option key={product} value={product}>{product}</option>)
          }
        </select>
        <select
          className={styles["filter-select"]}
          name="state"
          value={filters.state}
          onChange={ handleFilter }
        >
          <option value=''>State</option>
          {
            states.map((state) => <option key={state} value={state}>{state}</option>)
          }
        </select>
        <select
          className={styles["filter-select"]}
          name="city"
          value={filters.city}
          onChange={ handleFilter }
        >
          <option value=''>City</option>
          {
            cities.map((city) => <option key={city} value={city}>{city}</option>)
          }
        </select>
      </div>
    </aside>
  );
}

export default Filter;