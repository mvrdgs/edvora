import React from 'react';
import styles from '../styles/Filter.module.css'

function Filter(props) {
  return (
    <section className={styles.filters}>
      <h3 className={styles["filter-title"]}>Filters</h3>
      <div className={styles["filters-container"]}>
        <select
          className={styles["filter-select"]}
        >
          <option
            className={styles["filter-option"]}
          >Products</option>
          <option>Test</option>
          <option>Test</option>
          <option>Test</option>
        </select>
        <select
          className={styles["filter-select"]}
        >
          <option
            className={styles["filter-option"]}
          >State</option>
          <option>Test</option>
          <option>Test</option>
          <option>Test</option>
        </select>
        <select
          className={styles["filter-select"]}
        >
          <option
            className={styles["filter-option"]}
          >City</option>
          <option>Test</option>
          <option>Test</option>
          <option>Test</option>
        </select>
      </div>
    </section>
  );
}

export default Filter;