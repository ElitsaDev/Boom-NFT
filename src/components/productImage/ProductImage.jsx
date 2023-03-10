import styles from "./ProductImage.module.scss";

export default function ProductImage(url){
    <div className={styles['product-image']}>
        <img src={url} className={styles.image} />
    </div>
}