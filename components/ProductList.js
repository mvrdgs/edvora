import React from 'react';
import styles from '../styles/ProductList.module.css'
import ProductCard from './ProductCard';

function ProductList(props) {
  return (
    <section>
      <h3 className={styles['product-name']}>
        Product Name
      </h3>
      <div className={styles.line} />
      <div className={styles["product-list"]}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default ProductList;