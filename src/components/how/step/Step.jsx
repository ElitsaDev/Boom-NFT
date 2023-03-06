import React from "react";
import styles from "./Step.module.scss";
import { Grid } from "@mui/material";

export default function Step({
    number,
    title,
    description
}) {
    return (
        <div className={styles.wrapper}>
            <Grid container >
                <Grid item xs={4} className={styles.container}>
                    <h1 className={styles.number}>
                        {number}
                    </h1>
                </Grid>
                <Grid item xs={8} className={styles.infoWrapper}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.description}>{description}</p>
                </Grid>
            </Grid>
        </div>
    );
}

