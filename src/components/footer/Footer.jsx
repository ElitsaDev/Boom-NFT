import React from "react";
import styles from "./Footer.module.scss";
import Logo from "../logo/Logo";

import { Container, Grid, Typography, Button } from "@mui/material";

export default function Footer() {

    return (
        <div className={styles.wrapper}>
            <Container className={styles.container} >
                <Grid container maxWidth="xl" justify={'space-between'} alignItems={"center"} >
                    <Grid item md={4} sx={{ display: "flex" }}>
                        <Logo type='muted' />
                    </Grid>
                    <Grid item md={4} sx={{ display: "flex", alignItems: "center" }}>
                        <p>
                            <Typography className={styles.typography}>
                                Bum All Rights Reserved 2021
                            </Typography>
                        </p>
                    </Grid>
                    <Grid item md={4} sx={{ display: "flex", justifyContent: "flex-end", position: "left" }} >
                        <Button className={styles.menuItemButton} variant={"text"}>Privacy Policy</Button>
                        <Button className={styles.menuItemButton} variant={"text"}>Cookie Policy</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}