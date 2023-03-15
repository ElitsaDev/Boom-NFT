import { Chip } from "@mui/material";
import React, { Fragment } from "react";
import styles from "./ProductInfoStatus.module.scss";
import classNames from 'classnames';
import CircleIcon from '@mui/icons-material/Circle';

export default function ProductInfoStatus({ live = true }) {
    if (live) {
        return (
            <div className={classNames(styles["product-info-status"])} >
                <Chip className={classNames(styles.status)}
                    icon={<CircleIcon className={classNames(styles.icon)} />}
                    label="LIVE"
                />
            </div>
        );
    }else {
        return null;
    }
}