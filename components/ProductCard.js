import Image from 'next/image';
import React from 'react';
import styles from '../styles/ProductCard.module.css'

function ProductCard(props) {
  return (
    <div className={styles["product-card"]}>
      <div>
        <Image
          alt="product"
          height={80}
          width={80}
          src="https://toppng.com/uploads/preview/sitemap-infos-transparent-i-phone-x-phone-in-hand-11563198189tafc9ocrkg.png"
        />
      </div>
      <div className={styles["product-info"]}>
        <div>Product name</div>
        <div>Brand name</div>
        <div>$ 40.00</div>
      </div>
      <div className={styles["product-description"]}>
        <div>
          <div>location</div>
          <div>date</div> 
        </div>
        <div>description of product</div>
      </div>
    </div>
  );
}

export default ProductCard;