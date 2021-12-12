import React from 'react';
// import Image from 'next/image';
import styles from '../styles/ProductCard.module.css'

const formatDate = (date) => {
  const [simpleDate] = date.split('T');
  const [year, month, day] = simpleDate.split('-');

  return `${day}:${month}:${year}`
};

function ProductCard({ product }) {
  const {
    product_name: name,
    brand_name: brand,
    price,
    image,
    date,
    address: { city, state },
    discription,
  } = product;

  return (
    <div className={styles["product-card"]}>
      <div>
        <img
          className={styles.image}
          alt="product"
          src={ image }
        />
        {/* <Image
          alt="product"
          src={ image }
        /> */}
      </div>
      <div className={styles["product-info"]}>
        <div>{ name }</div>
        <div>{ brand }</div>
        <div>{ `$ ${price.toFixed(2)}` }</div>
      </div>
      <div className={styles["product-description"]}>
        <div>
          <div>{ `${city}, ${state}` }</div>
          <div>
            Date:
            {' '}
            { formatDate(date) }
          </div> 
        </div>
        <div>{ discription }</div>
      </div>
    </div>
  );
}

export default ProductCard;