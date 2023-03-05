import React from "react";
import styles from "./How.module.scss";
import { Container, Grid, Typography, Button } from "@mui/material";
import Step from "./step/Step";

export default function How({
    description = "Discover, collect, and sell extraordinary NFTs on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM.",
    title = "String",
    items = [],
    link,
}) {
    return (
        <div className={styles.wrapper}>
            <Container className={styles.container} >
                <Grid container maxWidth="xl" justify={'space-between'} alignItems={"center"} >
                    <Grid item md={6} sx={{ display: "flexbox" }}>
                        <Typography variant="h1" className={styles.cardHeader}>
                            {title}
                        </Typography>
                        <p className={styles.description}>{description}</p>
                        <Button className={styles.menuItemButton} variant={"contained"} href={link}>Learn more</Button>
                    </Grid>
                    <Grid item md={6} sx={{ display: "flex" }}>
                         {items.map((item, id) => (
                            <Grid item xs={4} key={id}>
                                <Step  {...item} />
                            </Grid>
                        ))}  
                    </Grid> 
                </Grid>
            </Container>
        </div>
    );
}