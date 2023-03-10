import styles from "./ProductImage.module.scss";

export default function ProductImage({URL}){
    <div className={styles['product-image']}>
        <img src={URL} className={styles.image} />
    </div>
}