import { Chip } from "@mui/material";
import React from "react";
import styles from "./ProductInfoLikes.module.scss";
import classNames from 'classnames';
import FavoriteIcon from '@mui/icons-material/Favorite';
import millify from "millify";

export default function ProductInfoLikes({
    amount = 0,
}) {

    let formatedLikes = millify(amount);

    return (
        <div className={classNames(styles["product-info-likes"])} >
            <Chip className={classNames(styles.likes)}
                variant="outlined"
                icon={<FavoriteIcon className={classNames(styles.icon)} />}
                label={formatedLikes}
            />
        </div>
    );
}