import React from "react";
import styles from "./Collector.module.scss";
import { Grid } from "@mui/material";
import User from "../user/User"

export default function Collector({
    name,
    nftsCount,
    avatar,
    verified,
    id,
    type,
}) {

    return (
        <div className={styles.container}>
            <Grid container className={type == "lighter" ? styles.light : styles.dark}>
                <Grid item xs={3}>
                    <h1 className={styles.number}>
                        {id + 1}
                    </h1>
                </Grid>
                <Grid item xs={9} className={styles.infoUser} >
                    <User name={name}
                        avatar={avatar}
                        verified={verified}
                        info={`${nftsCount} items`}
                    />
                </Grid>
            </Grid>
        </div>
    )
}