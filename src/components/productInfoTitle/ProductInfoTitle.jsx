import { Typography } from "@mui/material";
import React from "react";
import styles from "./ProductInfoTitle.module.scss";

export default function ProductInfoTitle({text}){
    return (
        <div className="product-info-title">
            <Typography className={classNames(styles.title)}>
                {text}
            </Typography>
        </div>
    );
}
