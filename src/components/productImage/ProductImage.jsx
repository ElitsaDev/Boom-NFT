import React from "react";
import styles from "./ProductImage.module.scss";

export default function ProductImage({url='./images/nft.jpg'}){
    <div className={classNames(styles["product-image"])}>
        <img src={url} 
            alt="Product image"
            className={styles.image} />
    </div>
}