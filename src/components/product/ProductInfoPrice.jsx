import { Typography } from "@mui/material";
import styles from "./ProductInfoPrice.module.scss";
import classNames from 'classnames';

export default function ProductInfoPrice({
    amount = 0,
    currency
}) {
    return (
        <div className={classNames(styles["product-info-price"])} >
            <Typography className={classNames(styles.price)}
                variant="h1"
                component='p'
            >
                ON SALE FOR {amount}{currency}
            </Typography>
        </div>
    );
}