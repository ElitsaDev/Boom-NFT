import React from "react";
import styles from "./Step.module.scss";
import { Container, Grid, Typography } from "@mui/material";

export default function Step({
        number,
        title,
        description        
}) {
    return (
        <div className={styles.wrapper}>
            <Container className={styles.container} >
                <Grid container maxWidth="xl" justify={'space-between'} alignItems={"center"} >
                    <Grid item md={6} sx={{ display: "flex" }} className={styles.numberWrraper} >
                        <Typography className={styles.number} >{number}</Typography>
                    </Grid>
                    <Grid item md={6} sx={{ display: "flex" }} className={styles.textWrraper} >
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}