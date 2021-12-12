import React, { useEffect, useState } from 'react';
import styles from '../styles/ProductList.module.css'
import ProductCard from './ProductCard';

function ProductList({ products }) {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const productList = document.querySelector(`#${products[0].brand_name}`);
    productList.scrollTo(scroll, 0);
  }, [scroll, products]);

  const handleScroll = (side) => {
    if (side === 'right' && scroll < (products.length * 250) - 500) setScroll(scroll + 500);
    if (side === 'left' && scroll > 0) setScroll(scroll - 500);
  };

  return (
    <section className={styles['product-list-container']}>
      <h3 className={styles['product-name']}>
        { products[0].product_name }
      </h3>
      <div className={styles.line} />
      <div
        className={styles['carousel-container']}
      >
        <button type="button" onClick={ () => handleScroll('left') }>{'<<'}</button>
        <div
          id={products[0].brand_name}
          className={styles["product-list"]}
        >
          {
            products.map((product) => (
              <ProductCard
                key={ product.time }
                product={ product }
              />
            ))
          }
        </div>
        <button type="button" onClick={ () => handleScroll('right')}>{'>>'}</button>
      </div>
    </section>
  );
}

export default ProductList;